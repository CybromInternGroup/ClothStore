const { getCategory, setCategory, deleteCategory, updateCategory } = require("./controllers/categoryController")
const { getProduct, setProduct, imageUp, authenticator, upload } = require("./controllers/productController")
const { setUser, getUsers, getUser, authenticate, updatePassword } = require("./controllers/userController")
const {sendmail} = require("./controllers/mailController")
const { forgotPassword, resetPassword } = require("./controllers/passwordController")
const router = require("express").Router()



router.route("/product").get(getProduct).post(setProduct)
router.route("/file/").post(upload.single("file"),imageUp);
router.route("/file/authenticator").get(authenticator)




           //Category routers----!>

router.route("/category").get(getCategory).post(setCategory)
router.post("/category/update/")
router.delete('/category/:id',(deleteCategory))




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


module.exports = router