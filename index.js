//*requirements*//
const express = require("express"); //import express 
const app = express(); // instantiate express into variable called "app"
const bodyParser = require("body-parser"); // import body parser 
const contacts = require('./routes/contacts.js'); // import data from contacts 
const vehicles = require('./routes/vehicles.js'); //import data from vheicles 
const comments = require('./routes/comments.js'); //import data from comments 
const products = require('./routes/products.js'); //import data from products 
const port = process.env.PORT || 4001;  //create port variable and set to stream at port 4001


//middleware //
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(comments); 
app.use(contacts); 
app.use(products);
app.use(vehicles); 


//create listen request here 
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`); // call listen request on server and make param port 4001
}); // console log string saying were listening to web server ton port 4001  
