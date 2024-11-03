const { findAllTodoOfUser } = require("../services/todoSercives")
 
const {Todo}=require("../models")
const { where } = require("sequelize")
const displayTodo=async(req,res)=>{
 console.log(req.session.avtartUrl)
	const allTodo=await findAllTodoOfUser(req.session.userId)

	res.render("todo",{allTodo,name:req.session.userName,avtar:req.session.avtartUrl})

}

const addTodo=async(req,res)=>{
	console.log(req.body)

	const todo =await Todo.create({...req.body,userId:req.session.userId})

	res.redirect("/todo")
}

const isDoneTodo=async(req,res)=>{

const {id}=req.params
const {isDone}=req.body
console.log(id,isDone)

if(isDone=="done"){
	await Todo.update({isDone:1},{
		where:{
			id
		}
	})
}
else{
	await Todo.update({isDone:0},{
		where:{
			id
		}
	})
}

res.redirect("/todo")

}

const deleteTodo=async(req,res)=>{
	const {id}=req.params

	await Todo.destroy({
		where:{
			id
		}
	})

	res.redirect("/todo")
}

module.exports={displayTodo,addTodo,isDoneTodo,deleteTodo}