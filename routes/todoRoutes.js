const {Router} =require("express")
const { displayTodo ,addTodo,isDoneTodo,deleteTodo} = require("../controller/todoController")
const auth = require("../middilware/authMiddleware")


const router=Router()

router.use(auth)
router.route("/").get(displayTodo)

router.route("/add").post(addTodo)
router.route("/isDone/:id").post(isDoneTodo)
router.route("/delete/:id").post(deleteTodo)

module.exports=router