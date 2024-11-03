const multer =require("multer")
const uuid=require("uuid")

const storage=multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,"./public")
	},
	filename:(req,file,cb)=>{
		cb(null,uuid.v4()+"-"+file.originalname)
	}
})



const upload=multer({storage})
module.exports=upload






// const multer=require("multer")
// const uuid=require("uuid")

// const storage=multer.diskStorage({
// 	destination:(req,file,cb)=>{
// 		cb(null,"./public")
// 	},
// 	filename:(req,file,cb)=>{
// 		cb(null,uuid.v4()+ "-"+file.originalname)
// 	}
// })

// const upload=multer({storage})

// module.exports=upload