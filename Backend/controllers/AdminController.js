const AdminProductModel = require("../models/AminModels")

const AdminSave=(req,res)=>{
    const myData= new AdminProductModel(req.body);
    myData.save().then(()=>{console.log("data Saved")});
}
const AdminproductDisplay= async(req,res)=>{
    AdminProductModel.find().then((data)=>{
        res.json(data);
    })
}

const AdminproductDelete = async (req, res) => {
    try {
      const productId = req.params.id;
      console.log(productId);
      // Find the product by ID and delete it
      const deletedProduct = await AdminProductModel.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports={
    AdminSave,
    AdminproductDisplay,
    AdminproductDelete
}