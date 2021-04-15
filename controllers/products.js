const products = require('../data/products.js'); //import products array

//**make list, show, and create functions to house logic for products route */

function list(req, res){
    console.log('retrieving products array'); 
    res.json(products); 
}

function show(req, res){
    console.log('currently in products/id path');
    let id = req.params.id; 
    let foundProduct = products.find(product => product._id == id); 
    if(!foundProduct){ 
        res.status(400).json({ msg: 'No product with the id of ' + id}); 
        console.log('Product ' + id + ' not found'); 
    }
    res.json(foundProduct); 
}

function create(req, res){
    console.log('currently in products route/path to post new item'); 
    let counter = products.length + 1;
        
    const newProduct = {
    _id: counter,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    reviews: [{
            description: "great!",
            rating: 10
        }]
    }
      
    products.push(newProduct);
    counter++; 
    res.json(products[products.length - 1]); 
    console.log('new product added'); 
}

//export functions 
module.exports = { list, show, create }; 
