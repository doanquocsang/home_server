const express = require('express')
const app = express()
const router = require('./api/router')
require('dotenv').config()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.use(express.json({ limit: '10mb' }))

app.use(router)
app.listen(PORT, HOST, () => {
    console.log('home_server is running at PORT:', PORT , 'on', HOST)
})