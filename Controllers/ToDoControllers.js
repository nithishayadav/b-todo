const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo=async(req,res)=>{
    const toDo =await ToDoModel.find()
    res.send(toDo)
}
module.exports.saveToDo=async(req,res)=>{
    const { text }= req.body

    ToDoModel
        .create({text})
        .then((data)=>{
            console.log("added successfully");
            console.log(data);
            res.send(data);
            
        })
    }
module.exports.updateTo=async(req,res)=>{
    const {_id,text}=req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send('updated successfully'))
    .catch((err) => console.log(err))
}
module.exports.deletedTo=async(req,res)=>{
    const {_id}=req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send('deleted successfully'))
    .catch((err) => console.log(err))
}
