const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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

module.exports = router;