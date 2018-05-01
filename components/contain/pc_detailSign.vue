<template>
	<div class="leftCont">
		<h3>{{title}}签到详情</h3>
		<div class="showWay">
			<span @click="export2Excel">导出</span>
			<select name="showWay" v-model="showWay">
				<option value="0" selected="selected">全部</option>
				<option value="1">已签到</option>
				<option value="2">未签到</option>
			</select>
		</div>
		<table border="1" cellspacing="0" cellpadding="1" id="tableData">
			<tr>
				<th>序号</th>
				<th>学号</th>
				<th>学院</th>
				<th>专业</th>
				<th>年级</th>
				<th>班级</th>
				<th>报名学生姓名</th>
				<th>签到情况</th>
			</tr>
			<tr v-for="v in arr">
				<td>{{v.num}}</td>
				<td>{{v.id}}</td>
				<td>{{v.aca}}</td>
				<td>{{v.major}}</td>
				<td>{{v.gra}}</td>
				<td>{{v.cla}}</td>
				<td>{{v.name}}</td>
				<td>{{v.state}}</td>
			</tr>
			
		</table>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default {
		data() {
			return {
				title:"2017年“数创杯”全国大学生数学建模挑战赛",
				isShow: false,
				isDelete:false,
				arr:'',
				showWay:0
			}
		},
		methods: {
			export2Excel() {
				require.ensure([], () => {
					const { export_json_to_excel } = require('../vendor/Export2Excel');
					//表头
					const tHeader = ['序号', '学号', '学院', '专业', '年级','班级','报名学生姓名','签到情况'];
					//对应字段
					const filterVal = ['num','id','aca','major','gra','cla','name','state'];
					//数据源
					const list = this.arr;
					const data = this.formatJson(filterVal, list);
					export_json_to_excel(tHeader,data,'列表excel');
				})
			},
			formatJson(filterVal, jsonData) {
				return jsonData.map(v => filterVal.map(j => v[j]))
			},
			clear() {
				$("#input").val("")
			},
			notShow() {
				this.isShow = false;
			},
			toShow() {
				this.isShow = true
			},
			toAddAct(){
				location.href = "#/index/addAct"
			},
			toDelete(){
				this.isDelete = !this.isDelete;
			},
			getAll(){
				var _this = this;
				var arr = []; 
				$.ajax({
		    		type:"post",
		    		url:"http://localhost:3000/getSignById",
		    		async:true,
		    		data:{
		    			id:this.$route.params.id,
		    			start:0
		    		},
		    		success(data){
		    			data = JSON.parse(data);
		    			for(var i in data){
		    				var num = parseInt(i)+1;
		    				var id = data[i].stu_id;
		    				var name = data[i].stu_name;
		    				var aca = data[i].aca_name;
		    				var major = data[i].major_name;
		    				var cla = data[i].classes;
		    				var gra = data[i].grade;
		    				if(data[i].sign_state==0){
		    					var state = '未签到'
		    				}else{
		    					var state = '已签到'
		    				}
		    				var datas = {};
		    				datas.num = num;
		    				datas.id = id;
		    				datas.name = name;
		    				datas.aca = aca;
		    				datas.major = major;
		    				datas.cla = cla;
		    				datas.gra = gra;
		    				datas.state = state;
		    				arr.push(datas)
		    			}
		    			_this.arr = arr;
		    		}
		    	});
			},
			getIn(){
				var _this = this;
				var arr = []; 
				$.ajax({
		    		type:"post",
		    		url:"http://localhost:3000/getSignById1",
		    		async:true,
		    		data:{
		    			id:this.$route.params.id,
		    			start:0
		    		},
		    		success(data){
		    			data = JSON.parse(data);
		    			for(var i in data){
		    				var num = parseInt(i)+1;
		    				var id = data[i].stu_id;
		    				var name = data[i].stu_name;
		    				var aca = data[i].aca_name;
		    				var major = data[i].major_name;
		    				var cla = data[i].classes;
		    				var gra = data[i].grade;
		    				if(data[i].sign_state==0){
		    					var state = '未签到'
		    				}else{
		    					var state = '已签到'
		    				}
		    				var datas = {};
		    				datas.num = num;
		    				datas.id = id;
		    				datas.name = name;
		    				datas.aca = aca;
		    				datas.major = major;
		    				datas.cla = cla;
		    				datas.gra = gra;
		    				datas.state = state;
		    				arr.push(datas)
		    			}
		    			_this.arr = arr;
		    		}
		    	});
			},
			getOut(){
				var _this = this;
				var arr = []; 
				$.ajax({
		    		type:"post",
		    		url:"http://localhost:3000/getSignById2",
		    		async:true,
		    		data:{
		    			id:this.$route.params.id,
		    			start:0
		    		},
		    		success(data){
		    			data = JSON.parse(data);
		    			for(var i in data){
		    				var num = parseInt(i)+1;
		    				var id = data[i].stu_id;
		    				var name = data[i].stu_name;
		    				var aca = data[i].aca_name;
		    				var major = data[i].major_name;
		    				var cla = data[i].classes;
		    				var gra = data[i].grade;
		    				if(data[i].sign_state==0){
		    					var state = '未签到'
		    				}else{
		    					var state = '已签到'
		    				}
		    				var datas = {};
		    				datas.num = num;
		    				datas.id = id;
		    				datas.name = name;
		    				datas.aca = aca;
		    				datas.major = major;
		    				datas.cla = cla;
		    				datas.gra = gra;
		    				datas.state = state;
		    				arr.push(datas)
		    			}
		    			_this.arr = arr;
		    		}
		    	});
			}
		},
		mounted(){
		    this.getAll();
	    },
	    watch:{
	   		showWay:function(){
	   			var _this = this;
				var arr = []; 
	   			if(this.showWay == 1){
	   				this.getIn();
	   			}else if(this.showWay == 2){
	   				this.getOut();
	   			}else{
	   				this.getAll();
	   			}
	   		}
	    }
	}
</script>

<style scoped="scoped">
	/*通用样式设置*/
	.leftCont {
		float: right;
		width: 800px;
		min-height: 440px;
		padding: 10px;
		color: #fff;
		margin-right: 10px;
		background-color: rgba(255, 100, 0, 0.3);
		position: relative;
	}
	.showWay{
		position: absolute;
		top: 20px;right: 10px;
	}
	h3{
		width: 100%;
		font-weight: normal;
		text-align: center;
		font:18px/44px "微软雅黑";
	}
	/*table表样式*/
	table {
		width: 100%;
		text-align: center;
		font-size: 14px;
		/*margin-top: 20px;*/
	}
	
	table tr {
		height: 28px;
	}
	/*下拉菜单*/
	select {
		float: left;
		height: 30px;
		background-color: rgba(0, 0, 0, 0);
		font: 14px/30px "微软雅黑";
		color: #fff;
	}
	select option{
		color: #000;
	}
	a{
		color: #fff;
	}
</style>