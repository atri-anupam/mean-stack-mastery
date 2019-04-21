const mongoose = require('mongoose');
const schema = mongoose.Schema;

module.exports = {
    userSchema: new schema({
        fullName: String,
        email: String
    }, {strict: false})
};
