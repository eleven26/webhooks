### Github WebHooks

#### 系统要求
* node
* pm2

#### 安装配置
* `git pull https://github.com/eleven26/webhooks.git`
* `cd webhooks`
* `npm install`
* `pm2 start index.js`

#### 自定义 webhook 操作
``` javascript
app.post('/blog', (req, res) => {
  // 这里写你要做的操作
  res.send('anything')
})
```

#### 修改代码之后需要
* `pm2 restart index`
