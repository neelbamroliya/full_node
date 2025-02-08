const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.urlencoded())
app.use(express.json())


app.use('/v1/', routes)

app.listen('4051', () => console.log("server is running"))