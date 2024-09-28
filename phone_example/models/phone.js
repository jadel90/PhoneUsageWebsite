const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


var phoneSchemaful = new Schema ({
    name: {
        type: String,
        required: true
    },


    usage: {
        type: Number,
        required: true,
        min: 0, 
        max: 500
    },


    shopping: {
        type: Number,
        required: true,
        min: 0, 
        max: 500
    },


    searching: {
        type: Number,
        required: true,
        min: 0, 
        max: 500
    },


    media:  {
        type: Number,
        required: true,
        min: 0, 
        max: 500
    },


    Date: {
        type: String,
        Format: Date,
        required: true
    },




}, {
    timestamps: true
});


var phones = mongoose.model('Phone', phoneSchemaful); //initialize a model with a scheme you created. schema gives the layout while the model provides the functions for interacting the database

module.exports = phones;