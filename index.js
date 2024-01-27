
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./configs/db')
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();

app.get('/' , (req , res)=>{
   res.send('hello from simple server')
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + `http://localhost:${port}`))