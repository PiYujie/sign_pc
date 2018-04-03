<template>
	<div class="addAct leftCont">
		<h3>新增活动</h3>
		<div class="cont">
			<p><span>活动名称：</span><input type="text" /></p>
			<p><span>活动类别：</span>
				<select name="actType">
					<option value="t1" selected="selected">考试预约</option>
					<option value="t2">学术讲座</option>
					<option value="t3">科技创新</option>
					<option value="t4">文化活动</option>
					<option value="t5">科学竞赛</option>
					<option value="t6">学术讲座</option>
					<option value="t7">名著阅读</option>
					<option value="t8">创业教育</option>
				</select>
			</p>
			<p><span>举行地点：</span><input type="text" /></p>
			<p><span>活动开始时间：</span>
			</p>
			<p><span>活动结束时间：</span><input type="text" /></p>
			<p><span>所需人数：</span><input type="text" /></p>
			<p><span>主办单位：</span><input type="text" /></p>
			<p><span>报名条件：</span>
				<select name="actType">
					<option value="t1" selected="selected">考试预约</option>
					<option value="t2">学术讲座</option>
					<option value="t3">科技创新</option>
					<option value="t4">文化活动</option>
					<option value="t5">科学竞赛</option>
					<option value="t6">学术讲座</option>
					<option value="t7">名著阅读</option>
					<option value="t8">创业教育</option>
				</select>
				<select name="actType">
					<option value="t1" selected="selected">考试预约</option>
					<option value="t2">学术讲座</option>
					<option value="t3">科技创新</option>
					<option value="t4">文化活动</option>
					<option value="t5">科学竞赛</option>
					<option value="t6">学术讲座</option>
					<option value="t7">名著阅读</option>
					<option value="t8">创业教育</option>
				</select>
			</p>
			<p><span>活动奖励：</span>
				<input type="text" />
				<select name="actReward" class="actReward">
					<option value="r1" selected="selected">学分</option>
					<option value="r2">义工</option>
				</select>
			</p>
			<p class="allWidth"><span>活动内容：</span><textarea name="cont" rows="8" cols="87"></textarea></p>
		</div>
		<button>提交</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: ''
			}
		},
		methods: {

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
	
	h3 {
		width: 100%;
		font-weight: normal;
		text-align: center;
		font: 18px/44px "微软雅黑";
	}
	
	.addAct p {
		float: left;
		width: 400px;
		padding: 5px 0;
		/*height: 26px;*/
		font: 12px/26px "微软雅黑";
	}
	
	.addAct p span {
		display: block;
		float: left;
		width: 90px;
	}
	
	.addAct p input {
		float: left;
		height: 26px;
		width: 220px;
		padding-left: 10px;
	}
	/*单选按钮*/
	
	.addAct p input[type="radio"] {
		padding: 0;
		width: 15px;
		height: 15px;
	}
	
	.addAct div {
		width: 100%;
		overflow: hidden;
		zoom: 1;
	}
	/*文本域*/
	
	.addAct .allWidth {
		width: 100%;
	}
	
	.actReward {
		margin-left: 5px;
	}
	
	textarea {
		outline: none;
		border: none;
		padding: 0;
	}
	/*提交按钮样式*/
	
	button {
		display: block;
		border: none;
		padding: 0;
		margin: 10px auto;
		width: 80px;
		height: 30px;
		font: 14px/30px "微软雅黑";
		color: #FFFFFF;
		background-color: rgba(255, 100, 0, 0.4);
		border-radius: 8px;
		cursor: pointer;
	}
</style>