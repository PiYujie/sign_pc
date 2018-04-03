<template>
	<div class="leftCont">
		<h3>专业管理<img src="/img/font/add.svg" alt="新增" title="新增" @click="addAca"/></h3>
		<div class="list">
			<table border="1" cellspacing="0" cellpadding="1">
				<tr>
					<th>专业编号</th>
					<th>专业名称</th>
					<th>所属学院</th>
					<th colspan="2">操作</th>
				</tr>
				<tr>
					<td>1</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca" class="toClick">修改</td>
					<td @click="deleteAca" class="toClick">删除</td>
				</tr>
				<tr>
					<td>2</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
				<tr>
					<td>3</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
				<tr>
					<td>4</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
				<tr>
					<td>5</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
				<tr>
					<td>6</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
				<tr>
					<td>7</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
				<tr>
					<td>8</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
				<tr>
					<td>9</td>
					<td>计算机科学与技术</td>
					<td>电气与信息工程学院</td>
					<td @click="changeAca">重命名</td>
					<td @click="deleteAca">删除</td>
				</tr>
			</table>
		</div>
		<div class="change" v-show="isShow">
			<div class="cont">
				<h5>请输入新增的专业名称</h5>
				<input type="text" name="acamedy" id="acamedy" />
				<select name="acamedy">
					<option value="1001">外国语学院</option>
					<option value="1001">外国语学院</option>
					<option value="1001">外国语学院</option>
				</select>
				<p><span>确定</span><span @click="addAca">取消</span></p>
			</div>
		</div>
		<div class="change" v-show="isChange">
			<div class="cont">
				<h5>请输入新增的专业名称</h5>
				<input type="text" name="acamedy" id="acamedy" />
				<select name="acamedy">
					<option value="1001">外国语学院</option>
					<option value="1001">外国语学院</option>
					<option value="1001">外国语学院</option>
				</select>
				<p><span>确定</span><span @click="changeAca">取消</span></p>
			</div>
		</div>
		<div class="add" v-show="isDelete">
			<div class="cont">
				<h5>删除专业</h5>
				<h6>删除该专业后系统其它地方将不显示该专业信息，是否删除该专业?</h6>
				<p><span>确定</span><span @click="deleteAca">取消</span></p>
			</div>
		</div>
		<div class="page">
			<i>上一页</i><em>1</em><em>2</em><em>3</em><em>···</em><em>11</em><em>12</em><i>下一页</i>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				isChange: false,
				isDelete: false
			}
		},
		methods: {
			addAca() {
				this.isShow = !this.isShow
			},
			changeAca() {
				this.isChange = !this.isChange
			},
			deleteAca() {
				this.isDelete = !this.isDelete
			}
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
	/*修改样式*/
	
	.change select {
		display: block;
		margin: 10px auto;
		height: 30px;width: 200px;
	}
	
	.change {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	.cont {
		width: 280px;
		height: 190px;
		background-color: gainsboro;
		border-radius: 6px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	
	.cont h5 {
		margin: 0;
		padding: 0;
		height: 50px;
		text-align: center;
		font: 16px/50px "微软雅黑";
		color: #000;
	}
	
	.cont p {
		height: 39px;
		width: 100%;
		overflow: hidden;
		border-top: 1px solid #666666;
	}
	
	.cont p span {
		float: left;
		width: 139px;
		height: 39px;
		text-align: center;
		color: #666666;
		font: 14px/39px "微软雅黑";
		cursor: pointer;
	}
	
	.cont p span:first-of-type {
		border-right: 1px solid #666666;
	}
	
	.cont input {
		display: block;
		margin: 15px auto;
		height: 28px;
		width: 200px;
		border: 1px solid #DCDCDC;
		border-radius: 4px;
	}
	
	.cont h6 {
		width: 230px;
		margin: 20px auto;
		text-align: center;
		color: red;
		font: 14px/30px "微软雅黑";
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