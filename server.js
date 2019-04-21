const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var userRouter = require('./users/userRoutes');

const app = express();
const port = 3000;
//format of the connection uri is
//mongodb://server/database
const uri = 'mongodb://localhost:27017';  
//Connecting to mongoDD server using mongoose
mongoose.connect(uri)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//an error handling middleware
app.use((err, req, res, next) => {
    if(err) {
        console.log(err.stack);
        res.send('Something broke');
    }else {
        next();
    }
});


//this is an example of an application level middleware
app.use('/users', userRouter);

//defining the routes


//Special route
app.all('/ac',  (req, res, next) => {
    console.log('This is the secret route');
    //this will pass the control to the next handler
    next();
});

app.get('/ac', (req, res, next) => {
    console.log('A hit');
    res.send('Hello World');
});

// app.get('/users/:userId', (req, res) => {
//     console.log(req.params);
//     //we have not sent any response so the request is still waiting for the server
// });

//getting the query params
app.get('/check', (req, res) => {
    console.log(req.query);
});

//getting the post body params
//to get the body params we need to use another middleware called body parser
//npm install body-parser --save
app.post('/check', (req, res) => {
    console.log(req.body);
});

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
});