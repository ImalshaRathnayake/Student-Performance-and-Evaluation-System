const express = require('express')

const ejs = require('ejs')

const path = require('path')

const app = express()

// routes
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')

app.set('view engine', 'ejs')
app.use('/assets', express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.render('index')
})
app.use('/auth', authRoutes)
app.use('/users', userRoutes)

app.listen(3000, ()=>{
    console.log("server started on port 3000")
})