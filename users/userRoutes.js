const express = require('express');
const router = express.Router();


router.use('/', (err, req, res, next) => {
    if(err) {
        console.log(err);
        req.end();
    }else {
        next();
    }
});

router.use('/' , (req, res, next)=> {
    if(req.body) {
        if(req.body.username != 'anupam') {
            res.json(
                {
                    message: 'not allowed',
                    statusCode: 401
                }
            );
        }
    }else {
        //do soemthing
        next();
    }
});


router.get('/', (req, res) => {
    res.send('First route from the router');
});



module.exports = router;

// module.exports ={
//     a: b,
//     c: d
// }

// module.exports = [

// ]