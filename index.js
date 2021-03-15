const express = require('express')
const config = require('config')
const app = express()

const PORT = config.get('PORT')



app.listen(PORT,()=>console.log('App was been started!'))