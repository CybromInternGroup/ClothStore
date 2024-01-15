const category = require("../models/category")



const setCategory = async (req, res, next) => {


    try {
        let data = new category(req.body)

        data.save().then((data) => {
            res.json(data)
        })

    }
    catch (err) {

        next(err)
    }


}


const getCategory = async (req, res) => {


    let data = await category.find().populate("product")
    if (data) {

        res.json(data)

    }
    else {
        res.send("couldnt find anything")
    }



}



const updateCategory = async (req,res)=>{




}



const deleteCategory = async (req, res, next) => {


    try {

        console.log(req.params.id)
        let data = await category.findOneAndDelete({ _id: req.params.id })
        console.log(data)
        res.json(data)
    

    }
    catch (err) {

        next(err)
    }



}


module.exports = { setCategory, getCategory, updateCategory, deleteCategory }

