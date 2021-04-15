const contacts = require('../data/contacts.js'); //import contacts array

//**make list, show, and create functions to house logic for contacts route */

function list(req, res){
    console.log('retrieving contact array'); 
    res.json(contacts); 
}

function show(req,res){
    console.log('currently in contacts/id path');
    let id = req.params.id; // initialize parameter request into var called "id"
    let foundContact = contacts.find(person => person._id == id); //find contact whose id matches parameter request and assign to var "foundContact"
    if(!foundContact){ //if contact is not found then return below response 
        res.status(400).json({ msg: 'No member with the id of ' + id}); 
        console.log('Contact ' + id + ' not found'); 
    }
    res.json(foundContact); // return found contact 
}

function create(req, res){
    console.log('currently in contacts route/path to post new item'); 
    let counter = contacts.length + 1
    
    const newContact = {
        _id: counter, 
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }

    contacts.push(newContact);
    counter++; 
    res.json(contacts[contacts.length - 1]); 
    console.log('new contact added'); 
}

//export functions 
module.exports = { list, show, create }; 