<template>
	<div class="leftCont">
		<h3>新增专业</h3>
		<p><span>请输入新增专业名称：</span>
			<input type="text" name="addAca" id="addAca" />
		</p>
		<p><span>请输入选择该专业所属学院：</span>
			<select name="academy">
				<option value="1">电气与信息工程学院</option>
				<option value="1">电气与信息工程学院</option>
				<option value="1">电气与信息工程学院</option>
				<option value="1">电气与信息工程学院</option>
				<option value="1">电气与信息工程学院</option>
			</select>
		</p>
		<div class="list">
			<table border="1" cellspacing="0" cellpadding="1">
				<tr><th>专业编号</th><th>专业名称</th><th>所属学院</th><th colspan="2">操作</th></tr>
				<tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr>
				<tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr><tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr>
				<tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr><tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr>
				<tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr><tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr>
				<tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr><tr><td>1</td><td>计算机科学与技术</td><td>电气与信息工程学院</td><td>重命名</td><td>删除</td></tr>
			</table>
		</div>
	</div>
</template>

<script>
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
	table {
		width: 100%;
		text-align: center;
		font-size: 14px;
		margin-top: 20px;
	}
	
	table tr {
		height: 28px;
	}
</style>