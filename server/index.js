require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

const {
    SERVER_PORT
} = process.env

app.use(express.json())
app.use(cors())


app.listen(SERVER_PORT, () => {
    console.log('server is running 👾')
})