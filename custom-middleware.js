const express = require('express');
const app = express(); // creates express application

//define middleware function 
const requestTimestampLogger = (req,res, next) =>{
    const timeStamp  = new Date().toISOString();
    console.log(`Current timestamp is ${timeStamp}`);
    next(); // run the next actions after middleware
}

app.use(requestTimestampLogger);

app.get("/", (req,res) => { //localhost:3000/
    res.send('Welcome to our home page');
})

app.get("/about", (req,res) => { //localhost:3000/
    res.send('Welcome to our about page');
})

const port = 3000;
app.listen(port, () =>{
    console.log(`Server is running at port ${port}`);
})