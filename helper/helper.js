const genaretOtp=()=>{
	const arr=[1,2,3,4]

	let otp=""
	for(let i=0;i<=3;i++){
		otp+=arr[Math.floor(Math.random()*arr.length)]
	}

	return otp
}

module.exports={genaretOtp}