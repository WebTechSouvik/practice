const { where } = require("sequelize")
const {Todo} = require("../models")


const findAllTodoOfUser=async(id)=>{
console.log(id)
	try{
	const allTodo= await Todo.findAll({where:{
		userId:id
	}})
	return allTodo
}
catch(err){
	console.log(err)
}
}




module.exports={
	findAllTodoOfUser
}