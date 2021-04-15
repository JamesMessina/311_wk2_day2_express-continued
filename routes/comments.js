//*requirements*//
const express = require('express'); //import and initialize express
const router = express.Router();// allow express to use router method and initialize
const commentsController = require('../controllers/comments.js'); // import comments file from controllers folder to get logic

//** get, put, post, delete requests for comments path/route */

router.get('/comments', commentsController.list);

router.get('/comments/:id', commentsController.show);

router.post('/comments', commentsController.create);

//export router
module.exports = router; 
