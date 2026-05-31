const express = require('express');
const app = express(); // creates express application

//route urls
app.get("/", (req,res) => { //localhost:3000/
    res.send('Hello World');
})