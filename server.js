const express = require('express');
const path = require('path');
const PORT = 3000; 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://garrettallen13:6ADki4W5zZ0SCXIE@birdbingo.rcabwnx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
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

app.listen(PORT, () => console.log('listening on 3000')); //listens on port 3000 -> http:/localhost:3000/