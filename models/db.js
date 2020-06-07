var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("xxx");
//     var myobj =  [
//         { name: '李伟', age: '22', sex: '男',place:'信阳'},
//         { name: '杨利晨', age: '21', sex: '男',place:'湖州'},
//         { name: '毕丰旺', age: '22', sex: '男',place:'武威'},
//         { name: '李俊', age: '22', sex: '男',place:'周口'},
//         { name: '连鑫', age: '21', sex: '男',place:'南京'},
//         { name: '王顺', age: '23', sex: '男',place:'商丘'}
        
//        ];
//     dbo.collection("aaa").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("xxx");
//     var whereStr = {"name":'喻号博'};  // 查询条件
//     dbo.collection("aaa").deleteOne(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log("文档删除成功");
//         db.close();
//     });
// });
 

function getStudents(callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xxx");
        dbo.collection("aaa"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            callback(result);    //把数据传递给控制器
            db.close();
        });
    });

}

// 存储一个学生信息
function save(data,callback){
    // console.log(data)
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xxx");
        dbo.collection("aaa").insertOne(data, function(err, res) {
            if (err){
                console.log("插入数据失败了~");
                callback("-1"); // -1代表插入失败了  
            };
            callback("1"); // 1代表插入数据成功了
            console.log("文档插入成功");
            db.close();
        });
    });
}

//删除一条数据
function deletestu(data,callback){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("xxx");
        // var whereStr = {"name":data};  // 查询条件
        dbo.collection("aaa").deleteOne(data, function(err, obj) {
            if (err){
                 console.log("学生删除失败了~");
                 callback("-1");
            };
            callback("1");
            console.log("学生删除成功了~");
            db.close();
        });
    });
}

exports.deletestu = deletestu;
exports.getStudents = getStudents;
exports.save = save;
