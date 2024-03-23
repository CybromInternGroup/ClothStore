const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now, // Automatically set to current date and time
        get: function () {
          return this._doc.date.toLocaleString("en-US", {
            month: "short", // Short month name (e.g., Jan, Feb)
            day: "2-digit", // Two-digit day of the month
            year: "numeric", // Full year (e.g., 2024)
            hour: "numeric", // Hour in 12-hour format
            minute: "2-digit", // Two-digit minutes
            second: "2-digit", // Two-digit seconds
            hour12: true, // Use 12-hour clock with AM/PM
          });
        },
      },
  orderid: {
    type: String,
    default: function () {
      // Generate a random 4-digit number
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      return `ORD${randomDigits}`; // Concatenate with "ORD" prefix
    },
  },
  orderamt: {
    type: String,
    // Add other validations as needed
  },
  orderstatus: {
    type: String,
    // Add other validations as needed
  },
});

const Orderplaced = mongoose.model("placedOrder", addressSchema);

module.exports = Orderplaced;
