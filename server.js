require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Local DataBase
const mongoURI = 'mongodb://localhost:27017/reactauthDB';

// MongoAtlas Datbase
// const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MONGODB connected'))
  .catch((err) => console.log(err));

var Users = require('./routes/USers');

app.get('/', (req, res) => res.send('Welcome To Backend Server'));

app.use('/users', Users);

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
