const express = require('express');
const app = express(); // creates express application

//route urls
app.get("/", (req,res) => { //localhost:3000/
    res.send('Welcome to our home page');
})

const products = [
        {
            id : 1,
            label : 'Product 1'
        },
        {
            id : 2,
            label : 'Product 2'
        },
        {
            id : 3,
            label : 'Product 3'
        }
    ]
//get all products 
app.get("/products", (req, res)=>{
    res.json(products);
})

//dynamic get a product
app.get('/products/:id',(req,res) => {
    const productId = parseInt(req.params.id);
    const product = products.find( p => p.id === productId);
    if(product){
        res.json(product);
    } else {
        res.status(404).send('Product is not found, please try with a diff Id');
    }
})

const port = 3000;
app.listen(port, () =>{
    console.log(`Server is running at port ${port}`);
})