const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    area: {
        type: String,
        // required: true
    },
    city: {
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
});

const usersAddress= mongoose.model("UsersAddress", addressSchema);

module.exports = usersAddress;
