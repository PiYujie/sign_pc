<template>
	<div class="addAct leftCont">
		<h3>新生入学</h3>
			<div class="cont">
				<p><span>学生姓名：</span><input type="text" /></p>
				<p><span>性别：</span>
					<input type="radio" name="sex" id="sex" value="1" checked="checked"/>男
					<input type="radio" name="sex" id="sex" value="0" />女
				</p>
				<p><span>生日：</span><date-picker field="myDate" placeholder="出生日期" v-model="date" format="yyyy/mm/dd" :backward="true" :no-today="true" :forward="false"></date-picker></p>
				<p><span>身份证号：</span><input type="text" /></p>
				<p><span>班级：</span><input type="text" /></p>
				<p><span>学院：</span>
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
				<p><span>专业：</span>
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
			</div>
			<button>提交</button>
		</div>
</template>

<script>
	import 'babel-polyfill'; //因为使用了es6的一些方法，需要babel垫片，如果你项目中已有相关兼容性方案，可忽略
	import Vue from 'vue';
	import myDatepicker from 'vue-datepicker-simple/datepicker-2.vue'; //引入对应的组件
	export default{
		data(){
			return {
				date:''
			}
		},
		components:{
			'date-picker': myDatepicker
		}
	}
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
	.addAct p {
		/*float: left;*/
		width: 420px;height: 30px;
		padding: 5px 0;
		margin: 0 auto;
		/*height: 26px;*/
		font: 12px/26px "微软雅黑";
	}
	.addAct p span {
		display: block;
		float: left;
		width: 90px;
	}
	
	.addAct p input[type="text"] {
		float: left;
		height: 26px;
		width: 245px;
		padding-left: 6px;
	}
	/*单选按钮*/
	
	.addAct p input[type="radio"] {
		padding: 0;
		width: 15px;
		height: 15px;
	}
/*	/*
	.addAct div {
		width: 100%;
		overflow: hidden;
		zoom: 1;
	}*/
	/*文本域*/
	
	.addAct .allWidth {
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
	
</style>
<style type="text/css">
	.vue-datepicker {
		float: left;
	}
</style>