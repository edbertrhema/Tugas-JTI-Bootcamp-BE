require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const proudctRoute = require('./routes/productRoute');
var cors = require('cors')

const app = express()


const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionSuccessStatus: 200
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/products', proudctRoute);

mongoose.set("strictQuery", false)

mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to mongodb')
    app.listen(PORT, ()=>{
        console.log(`node API port ${PORT}`) 
    })
})
.catch((error) => {
     console.log('error')
 })

//  app.get('/',(req, res) =>{
//     res.send('Hello Node API')
// })

// app.get('/blog',(req, res) =>{
//     res.send('Hello blog222')
// })