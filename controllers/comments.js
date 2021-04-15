const comments = require('../data/comments.js'); //import comments array

//**make list, show, and create functions to house logic for comments route */

function list(req, res){
    console.log('retrieving comments array'); 
    res.json(comments); 
}

function show(req, res){
    console.log('currently in comments/id path');
    let id = req.params.id; 
    let foundComment = comments.find(comment => comment._id == id); 
    if(!foundComment){ 
        res.status(400).json({ msg: 'No comment with the id of ' + id}); 
        console.log('Comment ' + id + ' not found'); 
    }
    res.json(foundComment); 
}

function create(req, res){
    console.log('currently in comments route/path to post new item'); 
    let counter = comments.length + 1; 
    
    const newComment = {
        _id: counter,
        body: req.body.body,
        postId: 1
    }

    comments.push(newComment);
    counter++; 
    res.json(comments[comments.length - 1]); 
    console.log('new comment added'); 
}

//export functions 
module.exports = { list, show, create }; 