<template>
	<div class="leftCont">
		<h3>报名表信息</h3>
		<div class="search">
			<span @click="getMesAll">显示所有</span>
			<p>
				<select name="searchType" v-model="search">
					<option value="id">通过id查询</option>
					<option value="name">通过名称查询</option>
				</select>
				<input type="text" v-model="val"/>
				<img src="/img/font/search.svg" @click="searchVal"/>
				<img @click="clear" src="/img/font/no.svg" />
			</p>
			<strong><img src="/img/font/add.svg" title="新增" @click="toAddAct()"/></strong>
		</div>
		<table border="1" cellspacing="0" cellpadding="1">
			<tr>
				<th>序号</th>
				<th>活动名称</th>
				<th>报名人数</th>
				<th>总人数</th>
				<th>截止时间</th>
				<th>报名率</th>
				<th colspan="2">操作</th>
			</tr>
			<tr v-for="v in arr">
				<td>{{v.mes_id}}</td>
				<td>{{v.act_name}}</td>
				<td>{{v.len}}</td>
				<td>{{v.act_num}}</td>
				<td>{{v.mes_stop}}</td>
				<td>{{parseInt(v.len/v.act_num*100)}}%</td>
				<td><router-link :to="'/index/detailEnroll/'+v.mes_id">详情</router-link></td>
				<td><router-link :to="'/index/changeEnroll/'+v.mes_id">编辑</router-link></td>
			</tr>
		</table>
		
		<!-- 提示信息 -->
		<div class="message" v-show="isError">
			<p v-text="message"></p>
		</div>
		
		<xpage :total-pages="page" :total="total" :current-page="current"  @pagechanged="onPageChange" v-show="total>9"/>
	</div>
</template>

<script>
	import $ from 'jQuery';
	import xpage from "../pc_page.vue";
	export default {
		data() {
			return {
				isShow: false,
				isError:false,
				arr:'',
				//当前的页码
				current:1,
				//数据的总条数
				total:0,
				//当前数据的总页数
				page:1,
				//提示信息内容
				message:'123',
				//点击时当前id
				id:'',
				//搜索方式
				search:'id',
				//input框内容
				val:'',
				//判断是否为搜索的分页显示
				isPage:0
			}
		},
		components:{
			xpage
		},
		methods: {
			clear() {
				this.val = ''
			},
			notShow() {
				this.isShow = false;
			},
			toShow() {
				this.isShow = true
			},
			toAddAct(){
				location.href = "#/index/addEnroll"
			},
			//根据活动的名称，类别或举行地址查询活动信息
			getActByOther(name,mess,numPage){
				var _this = this;
				var arr = [];
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getMesByName",
					async:true,
					data:{
						start:numPage,
						name:name
					},
					success(data){
						data = JSON.parse(data);
						if(data.length!=0){
							for(var i in data){
								arr.push(data[i])
							}
							_this.arr = arr;
						}else{
							_this.isError = true;
							_this.message = mess;
							setTimeout(function(){
								_this.isError = false;
								_this.message = '';
							},1000)
						}
					}
				});
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getMesByNameTotal",
					data:{
						name:name,
					},
					success(data){
						data = JSON.parse(data);
						_this.total = data[0].total;
						console.log(_this.total)
						_this.page = Math.ceil(_this.total/9)
					}
				});
			},
			//input框改变内容搜索
			searchVal(){
				var way = this.search;
				var _this = this;
				var arr = [];
				if(this.val.length!=0){
					switch(way){
						case 'id':
							if(/^[0-9]*$/.test(this.val)){
								$.ajax({
									type:"post",
									url:"http://localhost:3000/getMesById",
									async:true,
									data:{
										id:parseInt(this.val)
									},
									success(data){
										data = JSON.parse(data);
										console.log()
										if(data[0].len!=0){
											for(var i in data){
												arr.push(data[i])
											}
											_this.arr = arr;
											_this.total = 1;
											_this.page = 1;
										}else{
											_this.isError = true;
											_this.message = '无该编号报名管理信息存在！';
											_this.val = '';
											setTimeout(function(){
												_this.isError = false;
												_this.message = '';
											},1000)
										}
									}
								});
							}
						break;
						default:
							this.getActByOther(this.val,'该活动无对应报名信息!',0);
						break;
					}
					this.isPage = 1;
				}
			},
			//获取所有报名信息管理表
			getMesAll(){
				this.isPage = 0;
				var _this = this;
				var arr = [];
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getMesTotal",
					async:true,
					success(data){
						data = JSON.parse(data);
						_this.total = data[0].total;
						_this.page = Math.ceil(_this.total/9)
					}
				});
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getMes",
					async:true,
					data:{
						start:0
					},
					success(data){
						data = JSON.parse(data);
						if(data.length!=0){
							for(var i in data){
								arr.push(data[i])
							}
							_this.arr = arr;
						}
					}
				});
			},
			onPageChange(page) {
		      	this.current = page;
		      	var _this = this;
				var arr = [];
		     	 $.ajax({
					type:"post",
					url:"http://localhost:3000/getMes",
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
			this.getMesAll();
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
		position: relative;
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
	/*搜索边框样式及位置设置*/
	.search{
		width: 100%;height: 28px;
		margin: 4px 0;
	}
	.search p{
		float: left;
		width: 450px;
		height: 26px;
		font:14px/24px "微软雅黑";
		padding: 0 10px;
		border-radius: 15px;
		border:1px solid #fff;
	}
	/*搜索下拉菜单样式设置*/
	.search select{
		float: left;
		height: 24px;
		background-color: rgba(0, 0, 0, 0);
		font: 14px/24px "微软雅黑";
		color: #fff;
	}
	.search option{
		color: #000;
	}
	/*搜索框设置*/
	.search input{
		float: left;
		width: 282px;
		height: 24px;
		padding-left: 5px;
		background-color: rgba(255, 255, 255, 0);
	}
	/*图标设置*/
	.search p img {
		float: left;
		width: 20px;
		height: 20px;
		margin: 2px 0;
		margin-left: 7px;
	}
	/*添加设置*/
	.search strong{
		float: right;
		width: 20px;
		height: 20px;
		margin: 2px 0;
	}
	.search strong img{
		border: 0;
		width: 100%;
		cursor: pointer;
	}
	/*显示所有按钮显示*/
	.search span{
		cursor: pointer;
		/*float: left;*/
		margin-left: 10px;
		font:14px/26px "微软雅黑";
	}
	a{
		color: #fff;
	}
	.message{
		position: absolute;
		z-index: 5;
		width: 280px;
		top: 40%;left: 50%;
		margin-left: -140px;
		border-radius: 5px;
		background-color: red;
	}
	.message p{
		width: 250px;height: 100%;
		padding: 15px;
		font:bold 18px/30px "微软雅黑";
		color: white;
		border:none;
		text-align: center;
	}
	.pointer{
		cursor: pointer;
	}
</style>