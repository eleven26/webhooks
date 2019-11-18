const express = require('express')
let exec = require('child_process').exec
require('dotenv').config()

const app = express()

app.post('/frontend', (req, res) => {
  let codeDir = '/Users/ruby/Code/eb-frontend'
  let command = [
    `cd ${codeDir}`,
    `git pull`,
    `./deploy.sh`,
    `php /Users/ruby/Code/eb-backend/dingding.php 2`
  ].join('&&')
  exec(command + ' > /var/log/webhook-blog.log 2>&1', (error, stdout, stderr) => {
  })
  res.send(command)
})

const port = 14000
app.listen(port, () => console.log(`app listening on port ${port}!`))
