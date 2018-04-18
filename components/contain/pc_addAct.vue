<template>
	<div class="changeAct leftCont">
		<h3>发布活动</h3>
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
				<p><span>活动开始时间：</span>
				</p>
				<p><span>活动结束时间：</span></p>
				<p><span>专业要求：</span>
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
				<!--<p><span>学院要求：</span>
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
				</p>-->
				<p><span>主办单位：</span><input type="text" /></p>
				<p><span>所需人数：</span><input type="text" /></p>
				<p><span>义工奖励：</span>
					<input type="text" />
				</p>
				<p><span>学分奖励：</span>
					<input type="text" />
				</p>
				<p><span>举行地点：</span><input type="text" /></p>
				<p class="allWidth"><span>活动内容：</span><textarea name="cont" rows="8" cols="87"></textarea></p>
			</div>
			<button>提交</button>
		</div>
		
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return {
			}
		}
	}
</script>

<style scoped="scoped">
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
	.changeAct p {
		float: left;
		width: 375px;
		padding: 5px 0;
		/*height: 26px;*/
		font: 12px/26px "微软雅黑";
	}
	
	.changeAct p span {
		display: block;
		float: left;
		width: 90px;
	}
	
	.changeAct p input {
		float: left;
		height: 26px;
		width: 245px;
		padding-left: 6px;
	}
	/*单选按钮*/
	
	.changeAct p input[type="radio"] {
		padding: 0;
		width: 15px;
		height: 15px;
	}
	/*文本域*/
	.changeAct .allWidth {
		width: 100%;
	}
	.actReward{
		margin-left: 5px;
	}
	textarea{
		outline: none;
		border: none;
		padding: 0;
	}
	/*提交按钮样式*/
	button{
		display: block;
		border: none;
		padding: 0;
		margin: 10px auto;
		width: 80px;height: 30px;
		font: 14px/30px "微软雅黑";
		color: #FFFFFF;
		background-color: rgba(255,100,0,0.4);
		border-radius: 8px;
		cursor: pointer;
	}
	/*.choosejedate{margin:0;}
    .choosejedate input{ height: 40px;}*/
</style>
