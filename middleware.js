const express = require('express');
const app = express(); // creates express application

//define middleware function 
const myMiddleWare = (req,res, next) =>{
    console.log('This middleware will run on every req');
    next(); // run the next actions after middleware
}

app.use(myMiddleWare);

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