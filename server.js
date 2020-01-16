const express = require('express')
const cors = require('cors')
const path = require('path');
require('dotenv').config()

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, '/build')));


const port = process.env.PORT || 8090