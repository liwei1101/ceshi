let express = require("express");
var bodyparser = require("body-parser")   //body-paser是专门用来接收客户端post过来的数据的
let students = require("./controllers/students")
let app = express();

//配置bodyparser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
//通过req.body就可以得到客户端传递的数据了

app.set("view engine","ejs")

app.get("/add",students.add)

//处理添加学生的post请求
app.post("/add",students.doAdd)

app.get("/delete",students.delete)

app.post("/delete",students.doDelete)

//显示学生列表
app.get("/allStudent",students.showStudents)

app.listen(3030,()=>{
    console.log("服务器启动！")
})
