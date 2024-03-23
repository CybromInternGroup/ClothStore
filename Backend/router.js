// const { getCategory, setCategory, deleteCategory, updateCategory } = require("./controllers/brandController")
const { getProduct, setProduct, imageUp, authenticator, upload } = require("./controllers/productController")
const { setUser, getUsers, getUser, authenticate, updatePassword } = require("./controllers/userController")
const { AdminSave,AdminproductDisplay,AdminproductDelete,AdminUpdate} = require("./controllers/AdminController")  //admin controller
const {sendmail} = require("./controllers/mailController")
const { forgotPassword, resetPassword } = require("./controllers/passwordController")
const {addBrand,getBrands} = require("./controllers/brandController")
const {addcatogory,getCategories} = require("./controllers/categorycontroller")
const {setAddress,getaddress}=require("./controllers/addressController")
const {OrderSave,OrderDisplay} = require("./controllers/orderplacedController")
const router = require("express").Router()

router.route("/product").get(getProduct).post(setProduct)
router.route("/file/").post(upload.single("file"),imageUp);
router.route("/file/authenticator").get(authenticator)

//Category routers----!>

// router.route("/category").get(getCategory).post(setCategory)
// router.post("/category/update/")
// router.delete('/category/:id',(deleteCategory))

//user routes ----!>
router.route("/user").get(getUsers).post(setUser)
router.route("/user/:email").get(getUser)
router.route("/user/auth").post(authenticate)


//mail routes
//router.route("/sendmail").post(sendmail)


//reset password routes
router.route("/forgotpassword").post(forgotPassword)
router.route("/resetpassword").post(resetPassword)
router.route("/changepassword").post(updatePassword)

// Admin routes
router.route("/Adminaddproduct") .post(AdminSave);
router.route("/AdminproductDisplay").get(AdminproductDisplay);
router.route("/api/AdminProductModel/:id").delete(AdminproductDelete);
router.route("/Adminupdateproduct/:id").post(AdminUpdate) 

// brand route
router.route("/addbrand").post(addBrand);
router.route("/getbrand").get(getBrands);


router.route("/addcatogory").post(addcatogory);
router.route("/getcatogory").get(getCategories);


//address routes
router.route("/addaddress").post(setAddress);
router.route("/getaddress").get(getaddress);



//Order Placed routes
router.route("/ordersave").post(OrderSave);
router.route("/orderdisplay").get(OrderDisplay);




module.exports = router