const express=require("express")
const session=require("express-session")
const app=express()
const path=require("path")
const swaggerDocs=require("./swagger.json")
const swaggerUi=require("swagger-ui-express")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/public",express.static("public"))
app.use("/css",express.static("views/css"))

app.use(session({
	secret:"my secret",
	resave:false,
	svaeUninitialized:true,
	cookie:{
		secure
	}
}))


// app.use(session({
// 	secret:"my secret",
// 	resave:false,
// 	saveUninitialized:true,
// 	cookie:{
// 		secure:false,
	
// 	},

// }))

app.set('view engine', 'ejs');

const userRouter=require("./routes/userRoutes")
const todoRouter=require("./routes/todoRoutes")
 app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.use("/user",userRouter)

app.use("/todo",todoRouter)


module.exports=app