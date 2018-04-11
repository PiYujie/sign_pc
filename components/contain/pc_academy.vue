<template>
	<div class="leftCont">
		<h3>学院管理<img src="/img/font/add.svg" alt="新增" title="新增" @click="addAca"/></h3>
		<div class="list">
			<table border="1" cellspacing="0" cellpadding="1">
				<tr><th>学院编号</th><th>学院名称</th><th colspan="2">操作</th></tr>
				<tr v-for="v in arr">
					<td>{{v.aca_id}}</td>
					<td>{{v.aca_name}}</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
			</table>
		</div>
		
		<xpage :total-pages="page" :total="total" :current-page="current"  @pagechanged="onPageChange" v-show="total>9"/>
		
		<div class="add" v-show="isShow">
			<div class="cont">
				<h5>请输入新增的学院名称</h5>
				<input type="text" name="acamedy" id="acamedy" />
				<p><span>确定</span><span @click="addAca">取消</span></p>
			</div>
		</div>
		<div class="add" v-show="isChange">
			<div class="cont">
				<h5>请修改学院名称</h5>
				<input type="text" name="acamedy" id="acamedy" />
				<p><span>确定</span><span @click="changeAca">取消</span></p>
			</div>
		</div>
		<div class="add" v-show="isDelete">
			<div class="cont">
				<h5>删除学院</h5>
				<h6>删除后所属学院的专业将会删除</h6>
				<p><span>确定</span><span @click="deleteAca">取消</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	import xpage from "../pc_page.vue";
	import $ from 'jQuery';
	export default{
		data(){
			return {
				isShow:false,
				isChange:false,
				isDelete:false,
				arr:"",
				//当前的页码
				current:1,
				//数据的总条数
				total:0,
				//当前数据的总页数
				page:1
			}
		},
		components:{
			xpage
		},
		methods:{
			addAca(){
				this.isShow = !this.isShow
			},
			changeAca(){
				this.isChange = !this.isChange
			},
			deleteAca(){
				this.isDelete = !this.isDelete
			},
			onPageChange(page) {
		      	console.log(page)
		      	this.current = page;
		      	var _this = this;
				var arr = [];
		     	 $.ajax({
					type:"post",
					url:"http://localhost:3000/getAca",
					data:{
						start:(page-1)*9
					},
					success(data){
						data = JSON.parse(data);
						if(data.length!=0){
							for (var i in data) {
								arr.push(data[i])
							}
						}
						_this.arr = arr;
					}
				});
		    }
		},
		mounted(){
			var _this = this;
			var arr = [];
			$.ajax({
				type:"post",
				url:"http://localhost:3000/getAcaTotal",
				async:true,
				success(data){
					data = JSON.parse(data);
					_this.total = data[0].total;
					_this.page = Math.ceil(_this.total/9)
					console.log(_this.total)
				}
			});
			$.ajax({
				type:"post",
				url:"http://localhost:3000/getAca",
				data:{
					start:0
				},
				success(data){
					data = JSON.parse(data);
					if(data.length!=0){
						for (var i in data) {
							arr.push(data[i])
						}
					}
					_this.arr = arr;
				}
			});
		}
	}
</script>

<style scoped="scoped">
	/*显示所有列表样式*/
	.leftCont{
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
	h3{
		width: 100%;height: 30px;
		font: 16px/30px "微软雅黑";
		text-align: center;
	}
	h3 img{
		float: right;
		margin-right: 15px;
		margin-top: 5px;
		width: 20px;height: 20px;
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
</style>