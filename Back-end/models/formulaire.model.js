const mongoose = require("mongoose");

const formShema = mongoose.Schema({
    name : {type: String , required: true},
    firstName : {type: String , required: true},
    email : {type: String , required: true},
    message : {type: String , required: true},
});



module.exports = mongoose.model('formulaire', formShema);