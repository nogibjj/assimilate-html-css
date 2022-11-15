# assimilate-html-css
Template for building out HTML and CSS

## Lesson 1:  Hello World Website

[Reference Hello World Microsoft Tutorial](https://learn.microsoft.com/en-us/cpp/mfc/html-basics?view=msvc-170)

[Reference HTML Spec](https://html.spec.whatwg.org/multipage/)

* [Build a comment](https://html.spec.whatwg.org/multipage/syntax.html#comments)

### First Project

`hello-website`

### Second Project (Include Images)

* use node to render + express:  https://expressjs.com/en/starter/installing.html

`npm init`
`npm install express`
* create the app file: `touch app.js`

```js
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
```

To Run: `node app.js`
