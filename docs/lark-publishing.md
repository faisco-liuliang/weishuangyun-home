# 飞书文章同步发布

这个项目的博客文章统一维护在 `lib/blog-data.ts`。页面会自动读取这个数据源：

- `/blog`：文章列表
- `/blog/[slug]`：文章详情
- 首页博客预览：最新 3 篇文章

## 飞书表格字段

当前共用飞书表格：

```text
https://uqy118p26b.feishu.cn/sheets/B4SlsgTdWhoWtMtKjnRciZbJnFg
```

当前子品牌 sheet：

```text
维双云：5b65f2
维双云：uT6Iuv
sass 哥：AJJLj0
```

建议飞书表格第一行使用以下字段名：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| 标题 | 是 | 文章标题 |
| slug | 否 | URL 路径，不填时脚本会按标题生成 |
| 摘要 | 否 | 列表页摘要，不填时从正文截取 |
| 分类 | 否 | 如 SEO 优化、GEO 优化、私域运营 |
| 标签 | 否 | 用逗号、顿号或换行分隔 |
| 作者 | 否 | 默认：维双云内容团队 |
| 发布日期 | 否 | 默认当天，格式建议 YYYY-MM-DD |
| 阅读时长 | 否 | 默认按正文长度估算 |
| 正文 | 是 | Markdown 正文，支持 `##`、`###` 标题 |
| SEO描述 | 否 | 页面 description，不填时使用摘要 |
| 状态 | 是 | `已审核` 的文章会进入发布队列 |
| 发布链接 | 否 | 发布后脚本会回写 |
| 发布时间 | 否 | 发布后脚本会回写 |
| 封面图URL | 否 | 文章封面图。支持公网 URL，正式发布时会下载到 `public/blog/{slug}/cover.*` |
| 封面图Alt | 否 | 图片 SEO 描述，不填时使用文章标题 |
| 正文配图 | 否 | 多张图用换行分隔。脚本会追加为 Markdown 图片 |
| 图片状态 | 否 | 发布后脚本会回写：`已下载`、`无封面图` 或失败原因 |

## 本地预演

默认不会写入项目，也不会改飞书状态：

```bash
LARK_SHEET_URL="https://uqy118p26b.feishu.cn/sheets/B4SlsgTdWhoWtMtKjnRciZbJnFg" npm run sync:lark -- --sheet-id "5b65f2" --range "A1:Q200"
```

如果表格有多个工作表，指定 `sheet-id`：

```bash
npm run sync:lark -- --sheet-url "https://uqy118p26b.feishu.cn/sheets/B4SlsgTdWhoWtMtKjnRciZbJnFg" --sheet-id "5b65f2" --range "A1:Q200"
```

不同子品牌替换 `sheet-id` 即可：

```bash
# 维双云
--sheet-id "5b65f2"

# 维双云
--sheet-id "uT6Iuv"

# sass 哥
--sheet-id "AJJLj0"
```

## 正式发布

加 `--write` 后会：

1. 读取 `状态 = 已审核` 的文章
2. 先按 `slug` 检查网站代码里是否已经存在这篇文章
3. 如果设置了 `SITE_BASE_URL`，还会检查线上 `/blog/{slug}` 是否已经返回成功
4. 已存在的文章会跳过，不会重复写入博客代码，也不会重复发布
5. 新文章会下载 `封面图URL` 到 `public/blog/{slug}/cover.*`（如果填写了封面图）
6. 新文章会合并写入 `lib/blog-data.ts`
7. 发布后将飞书表格状态改成 `已发布`
8. 回写 `发布链接`、`发布时间`、`图片状态`（如果表格有这些列）

```bash
SITE_BASE_URL="http://106.75.167.39" pnpm run sync:lark -- --sheet-url "https://uqy118p26b.feishu.cn/sheets/B4SlsgTdWhoWtMtKjnRciZbJnFg" --sheet-id "5b65f2" --range "A1:Q200" --write
pnpm exec tsc --noEmit
pnpm build
git add lib/blog-data.ts
git commit -m "chore: publish reviewed articles"
git push origin main
```

## 自动任务建议

每天定时任务可以跑：

```bash
cd /srv/weishuangyun/brands/weishuangyun.com/repo
git pull --ff-only
SITE_BASE_URL="http://106.75.167.39" LARK_SHEET_URL="https://uqy118p26b.feishu.cn/sheets/B4SlsgTdWhoWtMtKjnRciZbJnFg" pnpm run sync:lark -- --sheet-id "5b65f2" --range "A1:Q200" --write
pnpm exec tsc --noEmit
pnpm build
git diff --quiet || {
  git add lib/blog-data.ts
  git commit -m "chore: publish reviewed articles"
  git push origin main
}
```

自动任务的发布判断：

- `状态 != 已审核`：不处理
- `状态 = 已审核` 且 `slug` 已在 `lib/blog-data.ts`：跳过，并回写为 `已发布`
- `状态 = 已审核` 且 `SITE_BASE_URL/blog/{slug}` 已经可访问：跳过，并回写为 `已发布`
- 只有代码和线上都不存在时，才写入新文章并触发后续构建部署

如果希望发布后不是改成 `已发布`，可以用环境变量覆盖：

```bash
LARK_PUBLISHED_STATUS="已审核" npm run sync:lark -- --write
```

但推荐使用 `已发布`，否则下次同步会重复发布同一行。
