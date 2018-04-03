<template>
	<div class="leftCont">
		<h3>{{title}}签到详情</h3>
		<div class="showWay">
			<select name="showWay">
				<option value="0">全部</option>
				<option value="1">已签到</option>
				<option value="2">未签到</option>
			</select>
		</div>
		<table border="1" cellspacing="0" cellpadding="1">
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
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2014441705</td>
				<td>张三</td>
				<td>电气与信息工程学院</td>
				<td>计算机科学与技术</td>
				<td>2014级</td>
				<td>3班</td>
				<td>已签到</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title:"2017年“数创杯”全国大学生数学建模挑战赛",
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