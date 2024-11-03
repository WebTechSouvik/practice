const swaggerAuotogen=require("swagger-autogen")()

const doc={
	info:{
		title:"My api",
		description:"description"
	},
	host:"localhost:3000"
}


const file="./swagger.json"
 const routes=["./routes/todoRoutes.js","./routes/userRoutes.js",]

 swaggerAuotogen(file,routes,)