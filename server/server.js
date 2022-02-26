const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require('mongoose')

const postRoute =  require('./routes/posts')
const categoryRoute = require('./routes/categories')

const router = require("express").Router()  

const Post = require("./models/Post")
const category = require("./models/Category")

const { Router } = require("express")
const path = require("path") 

dotenv.config()

app.use(express.json())

// local development
const PORT = 6868

//production
//const PORT = process.env.NODE_DOCKER_PORT || 6868

const MONGODB_URI = `mongodb+srv://exd_user1:mongoDB4me@cluster0.fv0mg.mongodb.net/docker?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false        
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

// // simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my docker mern application." });
  });

//endpoints
app.use("/api/posts", postRoute) 
app.use("/api/categories", categoryRoute) 

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {    
    app.use(express.static(path.join(__dirname, '/client', 'build')))  

    app.get('*', (req, res) => {  
        res.sendFile(path.join(__dirname, '/client', 'build', 'index.html'))
    })
}

// //permitted BE Endpoints FE to BE - local only
// app.use(cors())

//use only on local app
app.use(cors({
     credentials: true, 
     origin: "http://localhost:6868/api"
}))  

app.listen(PORT, () => console.log(`Server is up and running http://localhost:${PORT}`))