//*requirements*//
const express = require('express'); //import and initialize express
const router = express.Router();// allow express to use router method and initialize
const productsController = require('../controllers/products.js'); 

//** get, put, post, delete requests for products path/route */

router.get('/products', productsController.list); 

router.get('/products/:id', productsController.show); 

router.post('/products', productsController.create); 
   
//export router 
module.exports = router; 