# 维双云项目交接文档

这份文档是给新同事和 Codex 使用的总入口。新同事拿到仓库后，先阅读本文件，再根据任务阅读对应的专题文档。

## 1. 项目身份

- 品牌：维双云
- GitHub：`faisco-liuliang/weishuangyun-home`
- Git SSH 地址：`git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git`
- 线上域名：`https://wsy.fkw.com`
- 技术栈：Next.js App Router、React、TypeScript、Tailwind CSS
- 包管理器：pnpm
- 默认分支：`main`
- 线上服务器：由管理员维护，不把登录密码写入仓库或发给普通协作者

这个项目是维双云独立品牌站，不要把立亭云、凡科或乔拓云的品牌信息重新写入页面、SEO、博客、图片或配置。

## 2. 给 Codex 的第一句话

把下面这段话直接发给 Codex：

```text
请先完整阅读 docs/codex-handoff.md、README.md，以及与当前任务相关的 docs/*.md。
这是维双云官网项目，品牌名必须保持为“维双云”，线上域名是 https://wsy.fkw.com。
请先执行 git status --short 和 git remote -v，确认当前分支和工作区状态；不要覆盖或删除已有的未提交修改。
修改前先说明准备修改哪些文件，改完后运行 pnpm exec tsc --noEmit 和 pnpm build。
默认只做本地开发和 Git 提交，不要擅自连接服务器、修改 Nginx/PM2/SSL 或执行飞书写回。
如果任务涉及价格、域名、客服二维码、注册链接、飞书字段或线上发布，请先说明影响范围并等待我确认。
```

## 3. 新同事第一次使用

### Windows 安装

安装 Git for Windows、Node.js LTS、Codex Desktop，然后在 PowerShell 中执行：

```powershell
npm install -g pnpm
git --version
node --version
pnpm --version
```

GitHub SSH Key 的完整教程见：[docs/github-ssh-key-setup.md](./github-ssh-key-setup.md)。Windows 协作流程见：[docs/windows-codex-sop.md](./windows-codex-sop.md)。

### 下载和启动

```powershell
git clone git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git
cd weishuangyun-home
pnpm install
pnpm dev
```

浏览器打开 `http://localhost:3000`。如果端口被占用，以终端显示的端口为准。

### 每天开始工作

```powershell
git status --short
git pull --ff-only
pnpm install
pnpm dev
```

如果 `git status --short` 有输出，先让 Codex 解释这些本地修改，不要直接 `git reset`、`git checkout` 或覆盖文件。

## 4. 项目目录速查

| 需求 | 主要位置 |
| --- | --- |
| 首页标题、轮播、卖点 | `components/home/hero.tsx`、`components/home/advantages.tsx` |
| 首页产品入口 | `components/home/products-grid.tsx` |
| 首页 FAQ、案例、博客 | `components/home/home-faq.tsx`、`components/home/cases-preview.tsx`、`components/home/blog-preview.tsx` |
| 产品中心 | `app/products/page.tsx` |
| 产品详情页 | `app/products/*/page.tsx` |
| 价格中心 | `app/pricing/page.tsx` |
| 导航栏 | `components/layout/header.tsx` |
| 页脚、SEO 关键词、客服二维码 | `components/layout/footer.tsx` |
| 客服弹窗和右侧入口 | `components/contact/contact-qr-button.tsx`、`components/contact/floating-contact.tsx` |
| 客服二维码图片 | `public/contact-qr.png` |
| 博客文章数据 | `lib/blog-data.ts` |
| 全站 SEO 基础信息 | `app/layout.tsx`、`app/sitemap.ts`、`app/robots.ts` |
| JSON-LD 结构化数据 | `components/seo/json-ld.tsx` |
| 产品注册跳转 | `lib/product-links.ts` |
| 飞书同步脚本 | `scripts/sync-lark-posts.mjs` |
| 飞书用户授权 | `scripts/feishu-user-auth.mjs` |
| 飞书旧版文档导入 | `scripts/import-feishu-blog-posts.mjs` |

## 5. 修改规则

1. 文案、产品卖点、价格和功能规格必须保持品牌一致，不能凭空增加未确认的承诺。
2. 产品页、价格页、首页和博客页要同时检查移动端，不允许文字溢出、按钮错位或横向滚动。
3. 客服相关位置统一使用 `public/contact-qr.png`；没有确认不要替换二维码、增加电话号码或暴露内部联系方式。
4. SEO 修改要同时检查 `title`、`description`、`keywords`、canonical、sitemap、robots 和 JSON-LD。
5. 博客优先通过飞书同步，不要手工覆盖 `lib/blog-data.ts` 中已有文章。
6. 不要把 `.feishu/`、`.env*`、SSH 私钥、服务器密码、飞书 App Secret 提交到 Git。
7. 线上部署必须由管理员确认，普通同事只提交代码或发起 Pull Request。

## 6. 校验、提交和协作

修改完成后必须运行：

```powershell
pnpm exec tsc --noEmit
pnpm build
git status --short
```

推荐新同事使用分支：

```powershell
git switch main
git pull --ff-only
git switch -c update-homepage-copy
```

通过检查后提交：

```powershell
git add <明确的文件路径>
git commit -m "更新首页文案"
git push -u origin update-homepage-copy
```

然后在 GitHub 创建 Pull Request。若管理员明确允许直接推送主分支，才使用：

```powershell
git push origin main
```

## 7. 飞书文章发布

飞书表格可以共用一个文档，但不同品牌必须使用不同 sheet。维双云的 sheet ID 由管理员确认后填写，不能拿其他品牌 sheet 测试。

表格发布规则：

- 只有 `状态 = 已审核` 才进入候选队列。
- 脚本按 `slug` 检查代码和线上 `/blog/{slug}`，已经存在就跳过，不重复发布。
- 新文章可以读取封面图 URL，并下载到 `public/blog/{slug}/`。
- 成功发布后回写 `状态 = 已发布`、发布链接、发布时间和图片状态。
- 默认先 dry run；确认结果后才加 `--write`。

详见：[docs/lark-publishing.md](./lark-publishing.md)。常用命令：

```bash
LARK_SHEET_URL="https://uqy118p26b.feishu.cn/sheets/B4SlsgTdWhoWtMtKjnRciZbJnFg" \
SITE_BASE_URL="https://wsy.fkw.com" \
pnpm run sync:lark -- --sheet-id "维双云实际sheet-id" --range "A1:Q200"
```

确认 dry run 输出无误后：

```bash
LARK_SHEET_URL="https://uqy118p26b.feishu.cn/sheets/B4SlsgTdWhoWtMtKjnRciZbJnFg" \
SITE_BASE_URL="https://wsy.fkw.com" \
pnpm run sync:lark -- --sheet-id "维双云实际sheet-id" --range "A1:Q200" --write
```

飞书授权需要管理员提供环境变量 `FEISHU_APP_ID`、`FEISHU_APP_SECRET`，以及当前用户授权产生的 token；这些内容只放在本机或服务器环境变量中，不进 Git。

## 8. 线上部署信息

当前线上实例已经配置好：

- 域名：`wsy.fkw.com`
- 应用端口：`3101`
- PM2 进程：`weishuangyun-wsy`
- 部署根目录：`/srv/weishuangyun/brands/wsy.fkw.com/`
- 当前版本：`current` 软链接指向 `releases/<timestamp>`
- Nginx：按 `wsy.fkw.com` 反代到 `127.0.0.1:3101`
- HTTPS：Let's Encrypt，Certbot 自动续期

详细部署说明见：[docs/server-deployment.md](./server-deployment.md)。线上发布前必须完成本地构建、代码提交、备份当前版本，并由管理员确认。

## 9. 线上发布后的检查

```bash
curl -I https://wsy.fkw.com
```

管理员在服务器上检查：

```bash
pm2 status
pm2 logs weishuangyun-wsy --lines 100
sudo nginx -t
sudo certbot certificates -d wsy.fkw.com
```

如果网站打不开，先检查 PM2 是否 online，再检查 Nginx 配置和域名解析；不要直接删除 release 目录或重置 Git。

## 10. 交接给下一位同事

发送以下内容即可：

1. GitHub 仓库链接：`https://github.com/faisco-liuliang/weishuangyun-home`
2. 本仓库中的 `docs/codex-handoff.md`
3. 让对方先完成自己的 GitHub 协作者权限和 SSH Key 配置
4. 明确对方只负责本地修改、验证和提交，线上服务器、域名证书、飞书密钥由管理员保管

推荐对方在 Codex 中先发送本文第 2 节的启动提示词，然后再描述具体修改需求。
