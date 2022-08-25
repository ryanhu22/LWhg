const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Import Routers
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') // server render views
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public')) // public views

// Routers
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)