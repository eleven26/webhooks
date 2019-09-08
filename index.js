const express = require('express')
let exec = require('child_process').exec
require('dotenv').config()

const app = express()

app.post('/blog', (req, res) => {
  let host = 'blog.baiguiren.com'
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

app.post('/laravel', (req, res) => {
  let host = req.query.host
  let codeDir = `/home/wwwroot/${host}`
  let publishDir = `/home/wwwroot/${host}`
  let command = [
    `cd ${codeDir}`,
    `git pull -f`,
    `chown -R www:www ${publishDir}`
  ].join('&&')
  exec(command + ' > /var/log/webhook-blog.log 2>&1', (error, stdout, stderr) => {
  })
  res.send(command)
})

const port = 8600
app.listen(port, () => console.log(`app listening on port ${port}!`))
