# oa-bpsc-sh/analysis-sh-web
> 社会矛盾风险感控大数据分析系统--上海(前端工程)


### 安装依赖
```
yarn install
```

### 开发环境运行
```
yarn dev
```

### 构建生产环境代码
```
yarn build
```

### 构建镜像
```
yarn build-image
```

### 修改镜像tag
```
docker tag 192.168.93.172/oa-bpsc-sh/analysis-sh-web:latest 192.168.93.172/oa-bpsc-sh/analysis-sh-web:<版本号>
```

### 将镜像启动为容器
```
docker run --name=analysis-sh-web --restart=always -d -p 9001:80 -e LOCATION='\/peopleMediate\/V1.0.0.3' -e PROXY_PASS='http:\/\/192.168.93.70:8860' 192.168.93.172/oa-bpsc-sh/analysis-sh-web:<版本号>
```