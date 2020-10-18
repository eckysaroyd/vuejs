const express = require('express')
const ejs = require ('ejs')
const expressLayouts = require('express-ejs-layouts')
const expressEjsLayouts = require('express-ejs-layouts')
const router = require('./router')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(expressEjsLayouts)
app.set('view engine', 'ejs')


app.get('/',(req,res) => {
    const obj = {
        name: 'Dell',
        price: 12000
    }
    res.render('index', {obj:obj})
})

const PORT = process.env.PORT || 1111;

app.listen(PORT,() => {
    console.log(`Server has started on port ${PORT}`)
})