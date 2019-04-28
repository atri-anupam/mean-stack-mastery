const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const availabeSchema = require('../schemas');

var user = mongoose.model('user', availabeSchema.userSchema);

//creating a new user
// var userObj = {
//     fullName: 'anupam',
//     email: 'atri@gmail.com'
// };
// var newUser = new user(userObj);
// newUser.save();

//a router level middleware
router.use((req, res, next) => {
    console.log('I am a router level middleware');
    next();
});

router.get('/', (req, res) => {
    res.send('First route from the router');
});

//generating a tokek and sending it in response
router.get('/token', (req, res) => {

    //use mongogse to get the user and create token for that user

    var secret = 'Iamasecret123';
    var user = {
        name: 'Anupam',
        email: 'atri@gmail.com'
    };
    //var token = jwt.sign({ user, secret, { algorithm: 'RS256'});

    //default algo is HMAC SHA256
    //RSA HSA256
    var token = jwt.sign(user, secret);
    res.json(token);
});

//checking the token
router.get('/checktoken', (req, res) => {
    var token = req.body.token || req.query.token || req.headers.authorization;
    if(token) {
        token = token.replace(/^Bearer\s/, '');
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                res.json(err);
            }else {
                res.json(decoded);
            }
        });
    }
});


//suppose this is an observable
const myObservable;

Example of an observer function
const myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

//Example of subscribing to an observable
myObservable.subscribe(myObserver);

//Creating an Observable using the constructor function
const myObservable = new Observable(myObserver);

//Subscribing to an observable created using the constructor function
myObservable.sbscribe({
    next() {},
    err() {},
    complete() {}
});


module.exports = router;