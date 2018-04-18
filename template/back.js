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
app.post("/getAcaOnce",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取所有学院信息')
	connect.query(`SELECT * FROM academy WHERE aca_state = 1`, function(error, results, fields) {
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
	//新增学院
	app.post("/addAca",function(req,res){
	//解决跨域问题
		res.append("Access-Control-Allow-Origin","*");
		//连接后执行相应功能
		console.log('新增学院')
		connect.query(`INSERT INTO academy(aca_name, aca_state) VALUES ('${req.body.name}',1)`, function(error, results, fields) {
			if(error) throw error;
			res.send(JSON.stringify(results));
		});
	})
	//修改学院名称
	app.post("/changeAca",function(req,res){
		//解决跨域问题
		res.append("Access-Control-Allow-Origin","*");
		//连接后执行相应功能
		console.log('重命名学院')
		connect.query(`UPDATE academy SET aca_name='${req.body.name}',aca_state = ${req.body.state} WHERE aca_id =${req.body.id} `, function(error, results, fields) {
			if(error) throw error;
			res.send(JSON.stringify(results));
		});
	})
	//删除学院查询
	app.post("/isDeleteAca",function(req,res){
		//解决跨域问题
		res.append("Access-Control-Allow-Origin","*");
		//连接后执行相应功能
		console.log('获取该学院域下存在的专业')
		connect.query(`SELECT COUNT(*) total from academy,major WHERE aca_id = ${req.body.id} AND major.major_type = academy.aca_id AND major.major_state = 1`, function(error, results, fields) {
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

//新增活动类型
app.post("/addGenre",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('新增活动类别')
	connect.query(`INSERT INTO genre(gen_name, gen_state) VALUES ('${req.body.name}',1)`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
app.post("/changeGenre",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('重命名类别')
	connect.query(`UPDATE genre SET gen_name='${req.body.name}',gen_state = ${req.body.state} WHERE gen_id =${req.body.id} `, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
//获取活动类型
app.post("/getGenre",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取所有活动类别信息')
	connect.query(`SELECT * FROM genre WHERE gen_state = 1  LIMIT ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
})
app.post("/getGenreTotal",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取活动类型数量')
	connect.query(`SELECT COUNT(*) total from genre WHERE gen_state = 1`, function(error, results, fields) {
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
	connect.query(`SELECT academy.aca_name,major.major_id,major.major_name,major.major_state,academy.aca_id FROM major,academy WHERE academy.aca_id = major.major_type AND major_state = 1 LIMIT ${req.body.start},9`, function(error, results, fields) {
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
	//修改专业信息
	app.post("/changeMajor",function(req,res){
		//解决跨域问题
		res.append("Access-Control-Allow-Origin","*");
		//连接后执行相应功能
		connect.query(`UPDATE major SET major_name = '${req.body.name}',major_type = ${req.body.aca_id},major_state = ${req.body.state} WHERE major_id = ${req.body.id}`, function(error, results, fields) {
			if(error) throw error;
			res.send(JSON.stringify(results));
		});
	})
	//添加专业
	app.post("/addMajor",function(req,res){
		//解决跨域问题
		res.append("Access-Control-Allow-Origin","*");
		//连接后执行相应功能
		console.log('新增活动类别')
		connect.query(`INSERT INTO major(major_name,major_state,major_type) VALUES ('${req.body.name}',1,${req.body.id})`, function(error, results, fields) {
			if(error) throw error;
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
	console.log('获取签到概况')
	connect.query(`SELECT message.mes_id,SUM(enroll.sign_state) num,COUNT(enroll.mes_id) len,activity.act_name FROM enroll,message,activity WHERE enroll.mes_id = message.mes_id AND activity.act_id = message.act_id GROUP BY enroll.mes_id LIMIT ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
//根据id显示所有签到情况
app.post("/getSignById",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取签到详情')
	connect.query(`SELECT student.stu_id,student.stu_name,student.grade,student.classes,academy.aca_name,major.major_name,enroll.sign_state FROM student,academy,major,enroll WHERE enroll.mes_id = ${req.body.id} AND student.stu_id = enroll.stu_id AND student.academy = academy.aca_id AND student.major = major.major_id LIMIT  ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
app.post("/getSignById1",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取签到详情')
	connect.query(`SELECT student.stu_id,student.stu_name,student.grade,student.classes,academy.aca_name,major.major_name,enroll.sign_state FROM student,academy,major,enroll WHERE enroll.mes_id = ${req.body.id} AND student.stu_id = enroll.stu_id AND student.academy = academy.aca_id AND student.major = major.major_id AND enroll.sign_state = 1 LIMIT  ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
app.post("/getSignById2",function(req,res){
	//解决跨域问题
	res.append("Access-Control-Allow-Origin","*");
	//连接后执行相应功能
	console.log('获取签到详情')
	connect.query(`SELECT student.stu_id,student.stu_name,student.grade,student.classes,academy.aca_name,major.major_name,enroll.sign_state FROM student,academy,major,enroll WHERE enroll.mes_id = ${req.body.id} AND student.stu_id = enroll.stu_id AND student.academy = academy.aca_id AND student.major = major.major_id AND enroll.sign_state = 0 LIMIT  ${req.body.start},9`, function(error, results, fields) {
		if(error) throw error;
//		console.log(results)
		res.send(JSON.stringify(results));
	});
})
//监听端口
server.listen(3000);
console.log("开启服务器3000")
