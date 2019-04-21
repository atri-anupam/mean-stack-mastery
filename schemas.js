const mongoose = require('mongoose');
const schema = mongoose.Schema;

module.exports = {
    userSchema: new Schema({
        fullName: String,
        email: String
    }, {strict: false})
};
