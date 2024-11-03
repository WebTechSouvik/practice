const { genaretOtp } = require("../helper/helper");
const { createUserInDb, findAndvalid, findAvtartOfUser, sendmail, otpSaveToDb, validOtp, findUser } = require("../services/userServices");

const dispalyRegister = (req, res) => {
	res.render("register");
};

const dispalyLogin = (req, res) => {
	res.render("login");
};

const dispalyOtp = (req, res) => {
	res.render("otp");
};


const registerController = async (req, res) => {
	// console.log(req.body,req.file)
	const newuser = await createUserInDb(req.body,req.file);

	res.redirect("/user/login");
};

const loginController =async (req,res)=>{
	const valid=await findAndvalid(req.body)

	
	if(valid){
	 console.log(valid.id)
	 
	 const otp=genaretOtp()

	 	await sendmail(req.body.email,otp)
	 	await otpSaveToDb(valid.id,otp)
		req.session.userId=valid.id
		res.redirect("/user/otp")
	
	}
	else{
		res.redirect("user/login")
	}
}

const otpValided=async(req,res)=>{
	const {otp}=req.body

	const userId=req.session.userId

	const valid=await validOtp(userId,otp)

	if(valid){
			const avtar=await findAvtartOfUser(userId)
			const user=await findUser(userId)

			req.session.userName=user.firstName+ " "+user.lastName
			req.session.avtartUrl=`/public/${avtar?.fileName}`
			res.redirect("/todo")
	}
	else{
		console.log("invalid..")
		res.redirect("/user/otp")
	}
}


const logoutControlerr=(req,res)=>{
	req.session.destroy((err)=>{
		console.log(err)
	})

	res.redirect("/user/login")
}



module.exports = {
	dispalyRegister,
	dispalyLogin,
	registerController,
	loginController,
	logoutControlerr,
	dispalyOtp,
otpValided
};
