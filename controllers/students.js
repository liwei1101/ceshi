let db = require("../models/db")

exports.showStudents = (req,res)=>{
    db.getStudents(function(arr){
        res.render("index",{"arr":arr})
    })
    
}

//渲染添加学生的表单
exports.add = (req,res)=>{
    res.render("add")
}

//处理添加学生的逻辑
exports.doAdd = (req,res)=>{
    // console.log(req.body)  //body-parser做接收post数据的工作
    db.save(req.body,function(info){
        res.send(info)    //谁请求返回给谁，这里是ajks请求的，所以返回给ajks
    })
}

exports.delete = (req,res)=>{
    res.render("delete")
}

//处理删除学生的请求
exports.doDelete = (req,res)=>{
    console.log(req.body)
    db.deletestu(req.body,function(info){
        res.send(info)
    })
}