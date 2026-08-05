# 多品牌服务器部署建议

服务器可以按品牌和域名分目录部署，每个品牌一份独立 repo、一组环境变量、一个 Node 进程、一个 Nginx server block。

## 推荐目录

```text
/srv/weishuangyun/
  brands/
    wsy.fkw.com/
      repo/
      .env.production
    brand-a.example/
      repo/
      .env.production
    brand-b.example/
      repo/
      .env.production
  shared/
    logs/
    backups/
```

## 推荐端口

```text
wsy.fkw.com   -> 3100
brand-a.example    -> 3101
brand-b.example    -> 3102
```

## 单品牌启动命令

```bash
cd /srv/weishuangyun/brands/wsy.fkw.com/repo
pnpm install --frozen-lockfile
pnpm build
PORT=3100 pnpm start
```

生产环境建议用 PM2 或 systemd 托管进程。

## Nginx 反代示例

```nginx
server {
  listen 80;
  server_name wsy.fkw.com;

  location / {
    proxy_pass http://127.0.0.1:3100;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}
```

## 部署流程

1. 服务器安装 Node.js、pnpm、Nginx、PM2。
2. 每个品牌在 `/srv/weishuangyun/brands/<domain>/repo` clone 对应仓库。
3. 每个品牌使用独立端口运行。
4. Nginx 按 `server_name` 反代到对应端口。
5. 域名 DNS A 记录指向服务器 IP。
6. 用 certbot 给每个域名签发 HTTPS 证书。
