const express = require("express");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static("src"));

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});