const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const secret = 'Thisismysecret';
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
    var user = {
        name: 'Anupam',
        email: 'atri@gmail.com'
    };
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

module.exports = router;