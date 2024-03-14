const Brand = require("../models/brands");

// const Brand = require("..");

const addBrand = async (req, res, next) => {
  try {
    const { brand } = req.body;
    const newBrand = new Brand({ brand });
    const savedBrand = await newBrand.save();
    res.json(savedBrand);
  } catch (error) {
    next(error);
  }
};



const getBrands = async (req, res, next) => {
    try {
      // Fetch all brands from the database
      const brands = await Brand.find({}, 'brand category');
  
      res.json(brands);
    } catch (error) {
      next(error);
    }
  };

module.exports = { addBrand,getBrands };
