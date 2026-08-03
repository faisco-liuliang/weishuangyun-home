# 维双云官网项目

这是维双云官网的 Next.js 项目。团队同学可以把这个仓库下载到本地，然后用 Codex 修改官网文案、产品页、价格页、博客文章和 SEO 信息。

## 给团队同事的最快入口

如果你是第一次参与，请按顺序看这几份文档：

1. [Windows 同事用 Codex 协作 SOP](./docs/windows-codex-sop.md)
2. [GitHub SSH Key 配置教程](./docs/github-ssh-key-setup.md)
3. [团队使用指南：用 GitHub + Codex 修改官网](./docs/team-codex-guide.md)
4. [飞书文章同步发布说明](./docs/lark-publishing.md)
5. [多品牌服务器部署建议](./docs/server-deployment.md)

你也可以直接把下面这段话发给 Codex：

```text
请先阅读 README.md、docs/windows-codex-sop.md、docs/team-codex-guide.md 和 docs/github-ssh-key-setup.md。这个项目是维双云官网项目，我主要用 Windows + Codex 协作修改。请先帮我检查环境、拉取最新代码、安装依赖并运行本地预览。修改前必须先执行 git status --short，改完后运行 pnpm exec tsc --noEmit 和 pnpm build。没有我的确认，不要直接部署线上。
```

## 项目地址

主仓库：

```text
git@github.com:faisco-liuliang/weishuangyun-home.git
```

如果电脑上配置了专用 SSH Host，可以使用：

```text
git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git
```

## 本地启动

推荐使用 pnpm。

```bash
pnpm install
pnpm dev
```

浏览器打开：

```text
http://localhost:3000
```

如果 3000 被占用，终端会提示新的端口，例如 `http://localhost:3001`。

## 修改前后必须做的检查

每次开始修改前：

```bash
git status --short
git pull
```

每次修改完成后：

```bash
pnpm exec tsc --noEmit
pnpm build
```

确认没有问题后再提交：

```bash
git status
git add .
git commit -m "简短说明本次修改"
git push
```

## 常见修改位置

首页：

```text
components/home/hero.tsx
components/home/products-grid.tsx
components/home/blog-preview.tsx
components/home/home-faq.tsx
components/home/cta.tsx
```

价格页：

```text
app/pricing/page.tsx
```

产品详情页：

```text
app/products/mall/page.tsx
app/products/website/page.tsx
app/products/store/page.tsx
app/products/education/page.tsx
app/products/booking/page.tsx
app/products/tools/page.tsx
app/products/geo/page.tsx
```

博客数据：

```text
lib/blog-data.ts
```

一般不建议手动改博客数据，文章优先从飞书表格同步。

SEO 和结构化数据：

```text
app/layout.tsx
app/sitemap.ts
app/robots.ts
components/seo/json-ld.tsx
```

## 协作原则

- 每次改之前先 `git pull`，避免覆盖别人修改。
- 每次改之前先 `git status --short`，确认工作区是否干净。
- 新同学默认只做本地修改和 push，不直接部署线上。
- 涉及价格、域名、客服二维码、SEO 标题和产品卖点时，改完要重点检查。
- 多品牌建议一个品牌一个仓库，一个域名一个部署目录。

