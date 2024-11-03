const { where } = require("sequelize");
const { User, Media ,Otp} = require("../models");
const nodeMailer=require("nodemailer");


const createUserInDb = async (userInfo, fileInfo) => {
	try {
		const newUser = await User.create({ ...userInfo });

		const media = await Media.create({
			fileName: fileInfo.filename,
			originalName: fileInfo.originalname,
			size: fileInfo.size,
			userId: newUser.id,
		});

		return newUser;
	} catch (err) {
		console.log(err);
	}
};

const findAndvalid = async (loginInfo) => {
	try {
		const user = await User.findOne({ where: { email: loginInfo.email } });

		return user.checkPassword(loginInfo.password) ? user : null;
	} catch (err) {
		console.log(err);
	}
};
const findAvtartOfUser = async (userId) => {
	const avtar = await Media.findOne({
		where: {
			userId,
		},
	});

	return avtar;
};

const sendmail=async(userMail,otp)=>{

const transport=nodeMailer.createTransport({
	host:
	port:
	auth:{
		user:,
		pass:
	}
})


transport.sendMail({
	from,
	to,
	subject,
	text
})


// const transport=nodeMailer.createTransport({
// 	host:process.env.MAIL_HOST,
// 	port:process.env.MAIL_PORT,
// 	auth:{
// 		user:process.env.MAIL_USERNAME,
// 		pass:process.env.MAIL_PASSWORD,
// 	}
// })
// try{
// const info= await transport.sendMail({
// 	from:"rittusvk605@gmail.com",
// 	to:userMail,
// 	subject:"OTP VALIDATION",
// 	text:`YOUR OTP:${otp}`
// })




// }
// catch(err){
// 	console.log(err)
// }


}

const otpSaveToDb=async(userId,otp)=>{

	const expTime=Date.now()+ 5*60*1000
	const bdOtp=await Otp.findOne({where:{
		userId
	}})
if(bdOtp){

	const info= await Otp.update({number:otp,expTime},{
		where:{userId}
	})
}
else{
	const info =await Otp.create({number:otp,expTime,userId})
}

}

const validOtp=async(userId,otp)=>{
console.log(userId)
	const bdOtp=await Otp.findOne({where:{
		userId
	}})

	if(Date.now()>bdOtp.expTime){
		console.log("time is over")
		return false
	}

	if(bdOtp.number==otp){
		return true
	}
	else{
			console.log("invalid Otp")
		return false
	}

}


const findUser = async (id) => {
	try {
		const user = await User.findOne({ where: {id } });

		return user
	} catch (err) {
		console.log(err);
	}
};
module.exports = {
	createUserInDb,
	findAndvalid,
	findAvtartOfUser,
	sendmail,
	otpSaveToDb,
	validOtp,
	findUser
};
