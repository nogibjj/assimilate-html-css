//This allows me to render the index.html file
//To view the index.html file, I need to go to localhost:3000/index.html

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.static('.'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

