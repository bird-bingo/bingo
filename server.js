const express = require('express');
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const userController = require('./server/controllers/userController');
require('dotenv').config();


const Schema = mongoose.Schema;

const MongoDB_URI = process.env.MongoDB_URI;

mongoose.connect(MongoDB_URI, {
    dbName: 'birdBingo' 
});

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});


const birdController = require('./server/controllers/birdController')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
  });

app.get('/getBirds', birdController.getBirds, (req, res, next) => {
  return res.status(200).json(res.locals.birdList);
});

app.post('/createUser', userController.createUser, (req, res, next) => {
  return res.status(200).json(res.locals.createdUser);
})

app.listen(PORT, () => console.log('listening on 3000')); //listens on port 3000 -> http:/localhost:3000/