const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('/workspaces/assimilate-html-css/html-css-to-do/index.html')
})
app.use(express.static('.'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//app.get('/', function(req,res) {
//  res.sendfile('public/index.html');
//});