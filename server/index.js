const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('DB has connected...'))

app.use(routeUrls)
app.listen(4000, () => console.log('Server is up and running...'))

module.exports = app;