// const category = require("../models/category");
const product = require("../models/product")
const ImageKit = require("imagekit");
const multer = require("multer");
const upload = multer({dest:"uploads/"});
const fs = require("fs")
const imagekit = new ImageKit({
                    publicKey : "public_eY8GEFv3mFmpAbBc2MTI2Nx8R3w=",
                    privateKey :"private_H3RjvH63840eNvAFpgPQWrWUYIg=",
                    urlEndpoint :"https://ik.imagekit.io/asshopping04"
                    });


                    


const setProduct = async (req, res, next) => {



    try {


        let setProductCat = req.body
        let category_data = await category.findOne({ name: req.body.category })
        console.log(category_data)

        setProductCat.category = category_data._id

        let data = new product(setProductCat);

        data.save().then(async (data) => {
            console.log(data._id)

            await category.findOneAndUpdate(data.category, { $push: { product: data._id } }, { 'new': true })

            res.json(data);
            console.log(data.category)
        })



    }
    catch (err) {

        next(err)

    }

}







const getProduct = async (req, res, next) => {

try{
    let data = await product.find().populate("category")
    res.json(data)
    throw Error("amit")

}
catch(err){
    next(err)
}

   

}

/* this is the function which is recieving the file from the frontend first
and then sending it directly to the actual cloud server  id->1 clt - > 1*/
const imageUp = async (req,res)=>{

    let file = await req.file;
try{


    if (file) {

       let  base64data = new Buffer.from(`${file}`).toString('base64');



/* console.log(base64data) */







   let respt = await    imagekit.upload({
          file: base64data,
          fileName: `${req.file.filename}`,
          useUniqueFileName:true,
          extensions: [
            {
                name: "google-auto-tagging",
                maxTags: 5,
                minConfidence: 95
            }
        ]
          
        })
        
        res.json(respt)

    }


      

    }catch(err){

        console.log(err)
    }
  }


  const authenticator = async (req,res)=>{

    var result = imagekit.getAuthenticationParameters();
    res.send(result);



  }







module.exports = { getProduct, setProduct, imageUp, authenticator,upload}




