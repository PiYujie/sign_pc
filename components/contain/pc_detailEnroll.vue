<template>
	<div class="leftCont">
		<h3>报名详情</h3>
		<table border="1" cellspacing="0" cellpadding="1">
			<tr>
				<th>编号</th>
				<th>活动学号</th>
				<th>姓名</th>
				<th>学院</th>
				<th>专业</th>
			</tr>
			<tr v-for="a in arr">
				<td>{{a.enr_id}}</td>
				<td>{{a.stu_id}}</td>
				<th>{{a.stu_name}}</th>
				<td>{{a.aca_name}}</td>
				<td>{{a.major_name}}</td>
			</tr>
			
		</table>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default {
		data() {
			return {
				isShow: false,
				isDelete:false,
				arr:''
			}
		},
		methods: {
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
			}
		},
		mounted(){
			var arr = [];
			var _this = this;
			var id = this.$route.params.id;
			$.ajax({
				type:"post",
				url:"http://localhost:3000/detailEnrollById",
				data:{
					id:id
				},
				success(data){
					data = JSON.parse(data)
					if(data.length!=0){
						for (var i in data) {
							arr.push(data[i])
						}
						_this.arr = arr;
					}
					console.log(data)
				},
			});
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
	/*搜索栏样式设置*/
	
	.search {
		width: 100%;
		height: 40px;
		box-sizing: border-box;
		padding: 5px 10px;
	}
	
	.search span {
		float: left;
		font: 14px/30px "微软雅黑";
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
	/*搜索框*/
	
	.search p {
		float: left;
		width: 300px;
		height: 22px;
		border: 1px solid #fff;
		border-radius: 14px;
		position: relative;
		padding: 0 10px;
		margin: 3px 10px 3px 70px;
		/*margin: 0 auto;*/
	}
	
	.search p img {
		float: left;
		width: 16px;
		height: 16px;
		margin-top: 3px;
	}
	
	.search em {
		cursor: pointer;
		font-style: normal;
		font: 12px/28px "微软雅黑";
	}
	/*定位样式*/
	
	.search p span {
		position: absolute;
		width: 100%;
		height: 16px;
		font: 12px/15px "微软雅黑";
		margin-top: 3px;
		left: 0;
		text-align: center;
	}
	
	.search p span img {
		float: none;
		vertical-align: text-bottom;
		margin: 0;
	}
	
	.search p span b {
		padding-left: 5px;
	}
	/*搜索框*/
	
	.search p input {
		float: left;
		width: 255px;
		height: 22px;
		padding-left: 5px;
		background-color: rgba(255, 255, 255, 0);
	}
	/*新增按钮样式*/
	.search strong {
		float: right;
		width: 20px;
		height: 20px;
		margin: 5px 0;
	}
	
	.search strong img {
		border: 0;
		width: 100%;
		cursor: pointer;
	}
	a{
		color: #fff;
	}
</style>