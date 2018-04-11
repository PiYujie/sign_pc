var express = require("express");
var app = express();
var server = require('http').createServer(app);
var mysql = require("mysql");
app.use(express.static('../public'));
//创建数据库连接
//var connect = mysql.createConnection({
//	host:'rm-wz926t7cx37l367f1do.mysql.rds.aliyuncs.com',
//	user:'pyj',
//	password:'aliyunPYJ0207',
//	database:'signinsystem'
//});
var connect = mysql.createConnection({
	host:'localhost',
	user:'pyj',
	password:'123456',
	database:'signinsystem'
});
// 处理post请求的请求体模块
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//开始连接
connect.connect();

//获取所有学院信息
app.post("/getAca",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取所有学院信息')
	connect.query(`SELECT * FROM academy WHERE aca_state = 1 LIMIT ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
app.post("/getAcaTotal",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取报名表条数')
	connect.query(`SELECT COUNT(*) total from academy WHERE aca_state = 1`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})

//获取所有活动信息
app.post("/getAct",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取所有活动信息')
	connect.query(`SELECT activity.*,genre.gen_name FROM activity,genre WHERE activity.act_type = genre.gen_id LIMIT ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
app.post("/getActTotal",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取报名表条数')
	connect.query(`SELECT COUNT(*) total from activity`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})

//获取所有报名表信息
app.post("/getMes",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取所有报名表信息')
	connect.query(`SELECT COUNT(enroll.mes_id) len,message.*,activity.act_name,activity.act_num FROM enroll,message,activity WHERE enroll.mes_id = message.mes_id AND activity.act_id = message.act_id GROUP BY enroll.mes_id LIMIT ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
app.post("/getMesTotal",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取报名表条数')
	connect.query(`SELECT COUNT(*) total from message`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
//获取所有专业信息
app.post("/getMajor",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取所有专业信息')
	connect.query(`SELECT academy.aca_name,major.major_id,major.major_name,major.major_state FROM major,academy WHERE academy.aca_id = major.major_type AND major_state = 1 LIMIT ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
app.post("/getMajorTotal",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取报名表条数')
	connect.query(`SELECT COUNT(*) total from major WHERE major_state = 1`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})


//获取所有发布者信息
app.post("/getMan",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取所有发布者信息')
	connect.query(`SELECT * FROM manager`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})


//根据所有签到情况
app.post("/getSign",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log(req.body);
	console.log('获取签到概况')
	connect.query(`SELECT message.mes_id,SUM(enroll.sign_state) num,COUNT(enroll.mes_id) len,activity.act_name FROM enroll,message,activity WHERE enroll.mes_id = message.mes_id AND activity.act_id = message.act_id GROUP BY enroll.mes_id LIMIT ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})

//监听端口
server.listen(3000);
console.log("开启服务器3000")
