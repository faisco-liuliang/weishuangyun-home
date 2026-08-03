# Windows 同事用 Codex 协作 SOP

这份文档给 Windows 同事使用。目标是：拿到 GitHub 仓库链接后，可以把项目下载到本地，在 Codex 里修改官网，并把修改提交回 GitHub。

## 一、先安装工具

请先安装：

1. Git for Windows  
   https://git-scm.com/download/win

2. Node.js LTS  
   https://nodejs.org

3. Codex 桌面版

4. pnpm

打开 PowerShell，执行：

```powershell
npm install -g pnpm
```

检查是否安装成功：

```powershell
git --version
node --version
npm --version
pnpm --version
```

能看到版本号就说明可以继续。

## 二、配置 GitHub 权限

推荐每个同事使用自己的 GitHub 账号，然后由管理员把账号加入仓库协作者。

如果团队暂时共用一个 GitHub 账号，也要每台电脑单独生成 SSH Key，再把公钥添加到这个 GitHub 账号。

详细步骤看：

```text
docs/github-ssh-key-setup.md
```

Windows 最常用命令如下。

生成 SSH Key：

```powershell
ssh-keygen -t ed25519 -C "你的名字-weishuangyun" -f $env:USERPROFILE\.ssh\id_ed25519_github_faisco_liuliang
```

查看公钥：

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519_github_faisco_liuliang.pub
```

把输出的整行内容添加到 GitHub：

```text
GitHub 头像 -> Settings -> SSH and GPG keys -> New SSH key
```

配置 SSH Host：

```powershell
notepad $env:USERPROFILE\.ssh\config
```

写入：

```text
Host github-faisco-liuliang
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github_faisco_liuliang
  IdentitiesOnly yes
```

测试：

```powershell
ssh -T git@github-faisco-liuliang
```

成功时会看到类似：

```text
Hi 用户名! You've successfully authenticated, but GitHub does not provide shell access.
```

## 三、下载项目

选择一个本地目录，例如：

```powershell
mkdir D:\projects
cd D:\projects
```

下载项目：

```powershell
git clone git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git
cd weishuangyun-home
```

如果没有配置 SSH Host，也可以用标准地址：

```powershell
git clone git@github.com:faisco-liuliang/weishuangyun-home.git
cd weishuangyun-home
```

## 四、安装依赖并启动本地网站

```powershell
pnpm install
pnpm dev
```

浏览器打开：

```text
http://localhost:3000
```

如果 3000 被占用，终端会提示新的地址，例如：

```text
http://localhost:3001
```

## 五、在 Codex 里打开项目

1. 打开 Codex 桌面版。
2. 选择打开本地项目文件夹。
3. 选择刚才下载的 `weishuangyun-home` 文件夹。
4. 把下面这段话发给 Codex：

```text
请先阅读 README.md、docs/windows-codex-sop.md、docs/team-codex-guide.md 和 docs/github-ssh-key-setup.md。这个项目是维双云官网项目，我使用 Windows 本地开发。请先执行 git status --short，确认工作区状态，然后告诉我当前项目如何启动。后续每次修改前都要先检查 git status，修改后运行 pnpm exec tsc --noEmit 和 pnpm build。没有我的确认，不要部署线上。
```

## 六、让 Codex 帮你修改

可以这样说：

```text
帮我把首页主标题改成“某某品牌一站式获客官网解决方案”，改完后运行构建检查。
```

也可以这样说：

```text
帮我把价格页里小程序入门版改成 99 元/年，并确认移动端不要错位。
```

重要要求建议直接说清楚：

```text
修改前先 git status --short。不要改无关文件。不要删除我没有要求删除的内容。改完后运行 pnpm exec tsc --noEmit 和 pnpm build。
```

## 七、提交修改到 GitHub

修改完成并检查通过后，可以让 Codex 提交：

```text
请总结本次改动，确认 git status，然后帮我提交到 Git。commit message 用中文简短描述。提交后 push 到远程。
```

也可以自己在 PowerShell 执行：

```powershell
git status
git add .
git commit -m "更新首页文案"
git push
```

## 八、每天开始工作前

每次开始改之前，先执行：

```powershell
git status --short
git pull
pnpm install
pnpm dev
```

如果 `git status --short` 有内容，说明本地有未提交修改。不要直接覆盖，先问 Codex：

```text
请帮我看一下 git status，这些未提交修改是什么，是否需要先提交或暂存。
```

## 九、哪些事情不要随便做

新同事默认不要做这些操作：

- 不要直接部署线上服务器。
- 不要改服务器 Nginx、PM2、证书配置。
- 不要删除博客同步脚本。
- 不要删除 `public/contact-qr.png` 客服二维码。
- 不要随便改 `app/sitemap.ts`、`app/robots.ts`、`components/seo/json-ld.tsx`。
- 不要在没有确认的情况下改价格、域名、客服入口和注册跳转链接。

如果确实要改，让 Codex 先解释会影响哪里，再动手。

## 十、常见问题

### 1. Permission denied

通常是 SSH Key 没配置好，重新看：

```text
docs/github-ssh-key-setup.md
```

### 2. pnpm 不是内部或外部命令

重新安装：

```powershell
npm install -g pnpm
```

### 3. 本地端口 3000 被占用

看终端提示的新端口，比如：

```text
http://localhost:3001
```

### 4. 构建失败

把报错直接发给 Codex：

```text
pnpm build 报错如下，请帮我定位并修复。修复前先 git status --short。
```

