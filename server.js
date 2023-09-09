const express = require('express');
const app = express();
const path = require('path');
const fs =require('fs');
const bodyParser = require("body-parser"); 
const PORT = 3000; 




app.use(express.json());
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, './index.html'));
  });

app.listen(PORT, () => console.log('listening on 3000')); //listens on port 3000 -> http://localhost:3000/