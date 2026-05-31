//web framework for node js
//advantages - routing, middleware, template engines EJS, server html files, static file serving, error handling

const express = require('express');
const app = express(); // creates express application

app.get("/", (req,res) => { //localhost:3000/
    res.send('Hello World');
})

const port = 3000;
app.listen(port, () =>{
    console.log(`Server is running at port ${port}`);
})