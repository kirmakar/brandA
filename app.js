const express = require("express");
const app = express();
const path = require('path');
// const router = app.Router();

// app.get("/", function(request, response){
    // response.sendFile(path.join(__dirname+'/src/index.html'));
// });

app.use(express.static("src"));

app.listen(3001);