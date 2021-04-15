//*requirements*//
const express = require('express'); //import and initialize express
const router = express.Router();// allow express to use router method and initialize
const vehiclesController = require('../controllers/vehicles'); 

//** get, put, post, delete requests for vehicles path/route */

router.get('/vehicles', vehiclesController.list); 

router.get('/vehicles/:id', vehiclesController.show);

router.post('/vehicles', vehiclesController.create); 

//export router 
module.exports = router; 