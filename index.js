const express = require('express')
let exec = require('child_process').exec
require('dotenv').config()

const app = express()

app.post('/blog', (req, res) => {
  let host = process.env.HOST
  let codeDir = '/home/wwwroot/docs'
  let publishDir = `/home/wwwroot/${host}`
  let command = [
    `cd ${codeDir}`,
    `git pull`,
    'hexo generate',
    `rm -rf ${publishDir}`,
    `mv public ${publishDir}`,
    `chown -R www:www ${publishDir}`
  ].join('&&')
  exec(command + ' > /var/log/webhook-blog.log 2>&1', (error, stdout, stderr) => {
  })
  res.send(command)
})

app.listen(8600, () => console.log('Example app listening on port 3000!'))
