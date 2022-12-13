# assimilate-html-css
Template for building out HTML and CSS

## Lesson 4:  Build out a coding website using Hugo


## Lesson 3:  Hugo

* install Hugo (installed via .devcontainer)
* Create a site: https://gohugo.io/getting-started/quick-start/#create-a-site
`hugo new site quickstart`
cd into quickstart
`cd quickstart`
`git init`
`git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke`
`echo "theme = 'ananke'" >> config.toml`
`run hugo server`
Change the config.toml and test out
Next, make a page and test out in new terminal
`hugo new posts/my-first-post.md`


## Lesson 2: Got HTML served out

`node app.js` to html-css-to-do

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

#### Third example

[reference](https://learn.microsoft.com/en-us/training/modules/build-simple-website/2-project-structure)

### Ideas for things to demo

* CSS