const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        // required: true
    }
});

const Probrand = mongoose.model("Productbrand", productSchema);

module.exports = Probrand;
