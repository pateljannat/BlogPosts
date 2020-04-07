const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

let signUp = new Schema({
    name: 'String',
    password: 'String',
    password1: 'String',
    email: 'String',
    date: {
        type: 'Date',
        default: Date.now()
    }
})

signUp.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
signUp.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('SignUp', signUp);