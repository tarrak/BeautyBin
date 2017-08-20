var express = require('express')
var app = express()
var path = require('path')

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.use('/', express.static(path.join(__dirname, '../Client')))

app.listen(3000)