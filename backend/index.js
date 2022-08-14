require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');


const UserRoute = require('./routes/user');

mongoose.connect(process.env.URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database started'))

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', UserRoute);

app.listen(5000, () => console.log('Server started on port 5000'));