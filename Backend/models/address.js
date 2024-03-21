const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    
    
    fullname: {
        type: String,
        // required: true
    },
    mobile: {
        type: String,
        // required: true
    },
    flatNo: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    area: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    pincode: {
        type: String,
        // required: true
    },
    landmark: {
        type: String,
        // required: true
    },
});

const usersAddress= mongoose.model("UsersAddress", addressSchema);

module.exports = usersAddress;
