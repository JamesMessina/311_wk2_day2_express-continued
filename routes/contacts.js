//*requirements*//
const express = require('express'); //import and initialize express
const router = express.Router();// allow express to use router method and initialize
const contactsController = require('../controllers/contacts.js');  // import contacts file from controllers folder to get logic

//** get, put, post, delete requests for contacts path/route */

router.get('/contacts', contactsController.list); 

router.get('/contacts/:id', contactsController.show);

router.post('/contacts', contactsController.create); 

//export router 
module.exports = router;
