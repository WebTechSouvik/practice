const {Router} =require("express")
const { dispalyRegister, dispalyLogin, registerController,loginController,logoutControlerr, dispalyOtp, otpValided } = require("../controller/userController")
const upload = require("../middilware/multer")


const router=Router()


router.route("/register").get(dispalyRegister).post(upload.single("avtar"), registerController)

router.route("/login").get(dispalyLogin).post(loginController)

router.route("/logout").post(logoutControlerr)
router.route("/otp").get(dispalyOtp).post(otpValided)

module.exports=router