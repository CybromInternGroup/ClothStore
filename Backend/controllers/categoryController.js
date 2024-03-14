const Category= require("../models/category")


const addcatogory = async (req,res,next)=>{
    try{
        const Catogory = req.body;
        const newCatogory = new Category(Catogory)

        const saveCatogory = await newCatogory.save()
        res.json(saveCatogory)
    } catch(error){
        next(error)
    }
}
const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        next(error);
    }
};



module.exports = {addcatogory,getCategories}