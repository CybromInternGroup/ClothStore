const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        // required: true
    }
})

const Procategory = mongoose.model("ProductCategory",productSchema)
module.exports = Procategory;