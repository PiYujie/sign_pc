<template>
	<div class="leftCont">
		<h3>管理人员管理<img src="/img/font/add.svg" alt="新增" title="新增" @click="addAca"/></h3>
		<div class="list">
			<table border="1" cellspacing="0" cellpadding="1">
				<tr>
					<th>发布者编号</th>
					<th>发布者姓名</th>
					<th>操作</th>
				</tr>
				<tr v-for="v in arr">
					<td>{{v.id}}</td>
					<td>{{v.name}}</td>
					<td @click="deleteAca" class="toClick">删除</td>
				</tr>
			</table>
		</div>
		<div class="add" v-show="isShow">
			<div class="cont">
				<h5>请输入新增的姓名</h5>
				<input type="text" name="acamedy" id="acamedy" />
				<p><span>确定</span><span @click="addAca">取消</span></p>
			</div>
		</div>
		<div class="add" v-show="isDelete">
			<div class="cont">
				<h5>删除发布者</h5>
				<h6>该发布者将无法再登录系统</h6>
				<p><span>确定</span><span @click="deleteAca">取消</span></p>
			</div>
		</div>
		<div class="page">
			<i>上一页</i><em>1</em><em>2</em><em>3</em><em>···</em><em>11</em><em>12</em><i>下一页</i>
		</div>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default {
		data() {
			return {
				isShow: false,
				isDelete: false,
				arr:''
			}
		},
		methods: {
			addAca() {
				this.isShow = !this.isShow
			},
			deleteAca() {
				this.isDelete = !this.isDelete
			}
		},
		mounted(){
			var _this = this;
			var arr = [];
			$.ajax({
				type:"post",
				url:"http://localhost:3000/getMan",
				success(data){
					data = JSON.parse(data);
					if(data.length!=0){
						for (var i in data) {
							var id = data[i].man_id;
							var name = data[i].man_name;
							var type = data[i].man_type;
							var datas = {};
							if(type==1){
								datas.id = id;
								datas.name = name;
								datas.type = type;
								arr.push(datas)
							}
						}
						_this.arr = arr;
					}
//					console.log(data)
				}
			});
		}
	}
</script>

<style scoped="scoped">
	/*显示所有列表样式*/
	
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
	
	table {
		width: 100%;
		text-align: center;
		font-size: 14px;
		margin-top: 20px;
	}
	
	table tr {
		height: 28px;
	}
	/*标题样式*/
	
	h3 {
		width: 100%;
		height: 30px;
		font: 16px/30px "微软雅黑";
		text-align: center;
	}
	
	h3 img {
		float: right;
		margin-right: 15px;
		margin-top: 5px;
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
	/*添加框样式设置*/
	.add{
		width: 100%;height: 100%;
		position: absolute;
		top: 0;left: 0;
		background-color: rgba(0,0,0,0.5);
	}
	.cont{
		width: 280px;
		height: 150px;
		background-color: gainsboro;
		border-radius: 6px;
		position: absolute;
		top: 0;left: 0;right: 0;bottom: 0;
		margin: auto;
	}
	.cont h5{
		margin: 0;padding: 0;
		height: 50px;
		text-align: center;
		font:16px/50px "微软雅黑";
		color: #000;
	}
	.cont p{
		height: 39px;width: 100%;
		overflow: hidden;
		border-top: 1px solid #666666;
	}
	.cont p span{
		float: left;
		width: 139px;height: 39px;
		text-align: center;
		color: #666666;
		font:14px/39px "微软雅黑";
		cursor: pointer;
	}
	.cont p span:first-of-type{
		border-right: 1px solid #666666;
	}
	.cont input{
		display: block;
		margin: 15px auto;
		height: 28px;width: 200px;
		border: 1px solid #DCDCDC;
		border-radius: 4px;
	}
	.cont h6{
		margin: 15px auto;
		height: 30px;
		text-align: center;
		color: red;
		font:14px/30px "微软雅黑";
	}
	
	.toClick {
		cursor: pointer;
	}
	/*分页样式*/
	.page{
		height: 26px;
		text-align: center;
		font: 12px/24px "微软雅黑";
		position: absolute;
    	left: 50%;bottom: 20px;
    	margin-left: -100px;
	}
	.page i{
		float: left;
		padding: 0 5px;
		font-style: normal;
		border: 1px solid #666;
		margin-left: 5px;
	}
	.page em{
		float: left;
		width: 24px;height: 24px;
		font-style: normal;
		border: 1px solid #666;
		margin-left: 5px;
	}
</style>