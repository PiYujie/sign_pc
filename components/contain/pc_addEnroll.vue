<template>
	<div class="addEnroll leftCont">
		<h3>新增报名信息</h3>
		<p>
			<span>活动名称：</span>
			<select name="findName">
				<option value="act_id">name</option>
				<option value="act_id">name</option>
				<option value="act_id">name</option>
				<option value="act_id">name</option>
			</select>
		</p>
		<p>
			<span>报名开始时间：</span>
			<input type="text" name="begin_time" id="begin_time" />
			<i>0</i>
		</p>
		<p>
			<span>报名截止时间：</span>
			<input type="text" name="stop_time" id="stop_time" />
			<i>0</i>
		</p>
		<p>
			<span>是否需要进行签到：</span>
			<input type="radio" name="sign" id="yes" value="0" checked="checked" />是&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="radio" name="sign" id="yes" value="1" />否
		</p>
		<button>提交</button>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
/*通用样式设置*/
	.leftCont{
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
	/*添加活动表样式*/
	.addEnroll p{
		height: 60px;
		width: 600px;
		margin: 0 auto;
		font:14px/30px  "微软雅黑";
	}
	.addEnroll p span{
		float: left;
		width: 150px;
		font:16px/60px "微软雅黑";
	}
	.addEnroll p select{
		float: left;
		height: 30px;
		margin-top: 15px;
	}
	.addEnroll p input[type="text"]{
		float: left;
		background-color: rgba(0,0,0,0);
		height: 30px;width: 400px;
		margin-top: 10px;
		border-bottom: 1px solid #fff;
		font:14px/30px  "微软雅黑";
	}
	.addEnroll p i{
		float: right;
	}
		/*单选按钮*/
	.addEnroll p input[type="radio"]{
		margin-top: 23px;
	}
	.addEnroll button{
		display: block;
		width: 120px;height: 40px;
		margin: 20px auto;
		border-radius: 4px;
		background: rgba(255,100,0,0.5);
    	color: #fff;
    	font:16px/40px  "微软雅黑";
    	cursor: pointer;
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