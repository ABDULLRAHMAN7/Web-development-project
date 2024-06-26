const express = require("express")
const app = express()
const db = require('./config/database')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(express.static('node_modules'))

app.use(session({
    secret: 'albesher',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 * 15}
}))

app.use(flash())

app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req,res,next)=>{
    res.locals.user = req.user || null
    next()
})



app.get('/', (req,res)=> {

    res.redirect('/recipes')
})

const recipes = require('./routes/Recipes-routes')
app.use('/recipes', recipes)

const users = require('./routes/user-routes')
app.use('/users', users)

app.listen(3000, ()=> {

    console.log(' app is working in port 3000')
})