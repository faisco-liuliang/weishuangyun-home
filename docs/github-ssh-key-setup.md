# GitHub SSH Key 配置教程

这份文档解决一个问题：团队成员如何把自己的电脑连接到 GitHub 仓库，这样 Codex / GitHub Desktop 才能拉取和推送项目。

## 一、推荐权限方式

有两种方式：

### 方式 A：每个同学用自己的 GitHub 账号

推荐长期使用。

管理员把每个同学的 GitHub 账号加入仓库 Collaborators：

```text
GitHub 仓库 -> Settings -> Collaborators and teams -> Add people
```

优点：

- 能看出是谁提交的修改
- 离职或换人时可以单独移除权限
- 不需要多人共用一个密码

### 方式 B：团队共用一个 GitHub 账号

适合早期图省事，但不推荐长期使用。

缺点：

- 看不出是谁提交的
- 密码和 2FA 管理麻烦
- 一个同学配置错，可能影响所有人

如果暂时共用账号，也建议每台电脑各自生成 SSH key，然后添加到这个 GitHub 账号。

## 二、当前主仓库

当前仓库：

```text
git@github.com:faisco-liuliang/weishuangyun-home.git
```

如果电脑配置了专用 SSH Host，地址可能是：

```text
git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git
```

## 三、Mac 配置 SSH Key

### 1. 生成 key

打开终端：

```bash
ssh-keygen -t ed25519 -C "你的名字 GitHub" -f ~/.ssh/id_ed25519_github_faisco_liuliang
```

一路回车即可。如果提示输入密码，可以留空直接回车。

### 2. 查看公钥

```bash
cat ~/.ssh/id_ed25519_github_faisco_liuliang.pub
```

复制输出内容，类似：

```text
ssh-ed25519 AAAA... 你的名字 GitHub
```

注意：只复制 `.pub` 公钥，不要复制没有 `.pub` 的私钥。

### 3. 添加到 GitHub

登录 GitHub：

```text
头像 -> Settings -> SSH and GPG keys -> New SSH key
```

填写：

```text
Title: 你的电脑名
Key type: Authentication Key
Key: 粘贴刚才的公钥
```

点击 `Add SSH key`。

### 4. 配置 SSH Host

编辑：

```bash
nano ~/.ssh/config
```

添加：

```text
Host github-faisco-liuliang
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github_faisco_liuliang
  IdentitiesOnly yes
  AddKeysToAgent yes
  UseKeychain yes
```

### 5. 测试

```bash
ssh -T git@github-faisco-liuliang
```

成功时会看到：

```text
Hi 用户名! You've successfully authenticated, but GitHub does not provide shell access.
```

## 四、Windows 配置 SSH Key

### 1. 打开 PowerShell

在开始菜单搜索：

```text
PowerShell
```

右键打开即可，不一定需要管理员权限。

### 2. 生成 key

```powershell
ssh-keygen -t ed25519 -C "你的名字 GitHub" -f $env:USERPROFILE\.ssh\id_ed25519_github_faisco_liuliang
```

如果提示输入 passphrase，可以直接回车留空。

### 3. 查看公钥

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519_github_faisco_liuliang.pub
```

复制整行内容，类似：

```text
ssh-ed25519 AAAA... 你的名字 GitHub
```

### 4. 添加到 GitHub

浏览器打开 GitHub：

```text
头像 -> Settings -> SSH and GPG keys -> New SSH key
```

填写：

```text
Title: Windows-你的名字
Key type: Authentication Key
Key: 粘贴刚才的公钥
```

点击 `Add SSH key`。

### 5. 配置 SSH Host

在 PowerShell 运行：

```powershell
notepad $env:USERPROFILE\.ssh\config
```

如果提示文件不存在，点“是”创建。

写入：

```text
Host github-faisco-liuliang
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github_faisco_liuliang
  IdentitiesOnly yes
```

保存关闭。

### 6. 测试

```powershell
ssh -T git@github-faisco-liuliang
```

第一次会问：

```text
Are you sure you want to continue connecting?
```

输入：

```text
yes
```

成功时会看到：

```text
Hi 用户名! You've successfully authenticated, but GitHub does not provide shell access.
```

## 五、Clone 项目

Mac 和 Windows 都可以用：

```bash
git clone git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git
cd weishuangyun-home
pnpm install
pnpm dev
```

如果不用 SSH Host，也可以用标准地址：

```bash
git clone git@github.com:faisco-liuliang/weishuangyun-home.git
```

但如果电脑上有多个 GitHub 账号，推荐使用 `github-faisco-liuliang` 这种 Host 别名。

## 六、把已有本地项目改到新仓库

如果已经有项目文件夹，进入项目目录后运行：

```bash
git remote -v
git remote set-url origin git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git
git push -u origin main
```

## 七、常见问题

### Permission denied

原因通常是：

- 公钥没有添加到 GitHub
- 用错了 GitHub 账号
- remote 地址没有使用正确的 SSH Host

检查：

```bash
git remote -v
ssh -T git@github-faisco-liuliang
```

### Permission denied to xxx

如果看到：

```text
Permission to faisco-liuliang/weishuangyun-home.git denied to lisi20260424
```

说明当前电脑用了另一个 GitHub 账号的 key。请改用：

```bash
git remote set-url origin git@github-faisco-liuliang:faisco-liuliang/weishuangyun-home.git
```

### Repository not found

可能是：

- 仓库地址写错
- 当前 GitHub 账号没有仓库权限
- 仓库是私有仓库但没有邀请当前账号
