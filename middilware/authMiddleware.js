

const auth=(req,res,next)=>{

	if(req.session.userName){
		next()
	}
	else{
		res.redirect("/user/login")
	}

}

module.exports=auth