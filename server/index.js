require('dotenv').config()

const express = require('express')
const {json} = require('body-parser')
const app = express()
const session = require('express-session')

const sessionCheck = require('./middlewares/checkForSession')
const port = process.env.SERVER_PORT
const sc = require('./controllers/swag_controller')
const ac = require('./controllers/auth_controller')
const cc = require('./controllers/cart_controller')
const search = require('./controllers/search_controller')

app.use(json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(sessionCheck)

//swag
app.get('/api/swag', sc.read)

//auth
app.post('/api/login', ac.login)
app.post('/api/register', ac.register)
app.post('/api/signout', ac.signout)
app.get('/api/user', ac.getUser)
app.get('/api/users', ac.getUsers)

//cart
app.post('/api/cart', cc.add)
app.post('/api/cart/checkout', cc.checkout)
app.delete('/api/cart', cc.delete)

//search
app.get('/api/search', search.search)


app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})