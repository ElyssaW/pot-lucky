// Instantiate express
const express = require('express')
const app = express()
// Pull in layouts
const layouts = require('express-ejs-layouts')

// Set view engine to EJS
app.set('view engine', 'ejs')
app.use(layouts)

// Set route to public folder
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

// Home route
app.get('/', (req, res) => {
    res.render('main.ejs')
})

// Activate server
app.listen(3000, () => {
    console.log('Hello from port 3000')
})