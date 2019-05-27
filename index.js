const express = require('express')
let exec = require('child_process').exec

const app = express()

app.post('/blog', (req, res) => {
  let host = process.env.HOST
  let codeDir = '/home/wwwroot/docs'
  let publishDir = `/home/wwwroot/${host}`
  exec(`cd ${codeDir} && git pull && hexo generate && rm -rf ${publishDir} && mv public ${publishDir} && chown -R www:www ${publishDir}`, (error, stdout, stderr) => {
  })
  res.send('Hello World!')
})

app.listen(8600, () => console.log('Example app listening on port 3000!'))
