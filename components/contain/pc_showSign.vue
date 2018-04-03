<template>
	<div class="leftCont">
		<h3>签到信息显示</h3>
		<div class="search" id="searchBar">
			<span>显示活动类别：</span>
			<select name="actType">
				<option value="all" selected="selected">全部</option>
				<option value="t2">学术讲座</option>
				<option value="t3">科技创新</option>
				<option value="t4">文化活动</option>
				<option value="t5">科学竞赛</option>
				<option value="t6">学术讲座</option>
				<option value="t7">名著阅读</option>
				<option value="t8">创业教育</option>
				<option value="t9">考试预约</option>
			</select>
			<p>
				<img class="none" src="/img/font/sousuo.svg" v-show="isShow" />
				<input type="text" id="input" v-show="isShow" autofocus="autofocus" />
				<img class="none" v-show="isShow" @click="clear" src="/img/font/no.svg" />
				<span @click="toShow" v-show="!isShow"><img src="/img/font/sousuo.svg"/><b>搜索</b></span>

			</p>
			<em @click="notShow" v-show="isShow">取消</em>
		</div>
		<div class="listShow">
			<table border="1" cellspacing="0" cellpadding="1">
				<tr><th>序号</th><th>活动名称</th><th>报名人数</th><th>签到人数</th><th>截止时间</th><th>签到率</th><th>操作</th></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
				<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td><a href="#/index/detailSign">详情</a></td></tr>
			</table>
		</div>
		<xpage />
		<div class="message" v-show="isDelete">
			<h3>提示</h3>
			<b>您确定删除这条记录吗？</b>
			<p><span>确认</span><span  @click="toDelete">取消</span></p>		
		</div>
	</div>
</template>

<script>
	import xpage from "../pc_page.vue";
	export default {
		data() {
			return {
				isShow: false,
				isDelete:false
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
		components:{
			xpage
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
	}
	/*标题样式设置*/
	h3{
		width:100%;height: 30px;
		font:16px/30px "微软雅黑";
		text-align: center;
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
		color: #000000;
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
	
	.showAct table {
		width: 100%;
		text-align: center;
		font-size: 14px;
		margin-top: 20px;
	}
	
	.showAct table tr {
		height: 28px;
	}
	/*分页样式设置*/
	
	.page {
		height: 26px;
		margin: 10px auto 0;
		text-align: center;
		font: 12px/24px "微软雅黑";
		position: relative;
		left: 50%;
		margin-left: -190px;
	}
	
	.page i {
		float: left;
		padding: 0 5px;
		font-style: normal;
		border: 1px solid #666;
		margin-left: 5px;
	}
	
	.page em {
		float: left;
		width: 24px;
		height: 24px;
		font-style: normal;
		border: 1px solid #666;
		margin-left: 5px;
	}
	/*删除弹出*/
	.message{
		position: absolute;
		width: 200px;height: 130px;
		top: 50%;margin-top: -75px;
		left: 50%;margin-left: -100px;
		background-color: #fff;
	}
	.message h3{
		width: 100%;
		height: 30px;
		box-sizing: border-box;
		padding-left: 15px;
		background-color: rgba(255,100,0,0.4);
		font:14px/30px "微软雅黑";
	}
	.message b{
		display: block;
		width: 100%;height: 50px;
		font:14px/50px "微软雅黑";
		text-align: center;
		color: #FFA500;
	}
	.message p{
		width: 110px;height: 30px;
		margin: 0 auto;
	}
	.message span{
		float: left;
		margin-left: 10px;
		width: 40px;
		background-color: rgba(255,100,0,0.4);
		font:14px/30px "微软雅黑";
		text-align: center;
		cursor: pointer;
	}
	/*删除按钮样式*/
	.toDelete{
		cursor: pointer;
	}
	/*表格样式*/
	table{
		width: 100%;
    	text-align: center;
    	font-size: 14px;
	}
	table tr{
		height: 28px;
	}
	a{
		color: #fff;
	}
</style>