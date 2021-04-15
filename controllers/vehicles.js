const vehicles = require('../data/vehicles.js'); //import contacts array

//**make list, show, and create functions to house logic for vehicles route */

function list(req, res){
    console.log('retrieving vehicles array');
    res.json(vehicles)
}

function show(req, res){
    console.log('currently in vehicles/id path');
    let id = req.params.id; 
    let foundVehicle = vehicles.find(vehicle => vehicle._id == id); 
    if(!foundVehicle){ 
        res.status(400).json({ msg: 'No vehicle with the id of ' + id}); 
        console.log('Vehicle ' + id + ' not found'); 
    }
    res.json(foundVehicle); 
}

function create(req, res){
    console.log('currently in vehicles route/path to post new item'); 
    let counter = vehicles.length + 1;
    let randomBoolean = Boolean(Math.round(Math.random())); 
    let randomNumber = Math.floor(Math.random() * (100000 - 1000) + 1000);
    
    const newVehicle = {
    _id: counter,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: randomNumber,
    miles: Math.round(randomNumber * 0.62137), 
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: randomBoolean
    
    }

    vehicles.push(newVehicle);
    counter++; 
    res.json(vehicles[vehicles.length - 1]); 
    console.log('new vehicle added'); 
}

//export functions 
module.exports = { list, show, create }; 