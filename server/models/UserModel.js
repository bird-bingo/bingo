const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://garrettallen13:6ADki4W5zZ0SCXIE@birdbingo.rcabwnx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    dbName: 'birdBingo' 
});