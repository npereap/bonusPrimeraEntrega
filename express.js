const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public' ))
 
/* app.get('/', function (req, res) {
 // res.send('Hello World')
  res.send('<b> Hola </b> <p> Mundo </p> ')
}) */
 
app.listen(3000)