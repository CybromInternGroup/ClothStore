const OrderModel = require("../models/orderplaced");

const OrderSave = async (req, res) => {
  try {
    const { orderamt, orderstatus } = req.body;

    // Create a new instance of OrderModel
    const myData = new OrderModel({
      orderamt,
      orderstatus,
    });

    // Save the new order to the database
    await myData.save();
    console.log("Data Saved");

    res.status(200).send("Order placed successfully");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Error placing order");
  }
};

const OrderDisplay = async (req, res) => {
  try {
    const orders = await OrderModel.find().lean(); // Use lean() to get plain JavaScript objects

    // Convert date format in each order object
    const formattedOrders = orders.map(order => ({
      ...order,
      date: new Date(order.date).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    }));

    res.json(formattedOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).send("Error fetching orders");
  }
};

module.exports = {
  OrderSave,
  OrderDisplay,
};
