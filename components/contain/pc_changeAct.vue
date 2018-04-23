<template>
	<div class="leftCont">
		<h3>修改活动信息</h3>
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
				<p>
					<span>活动开始时间：</span>
					<date-picker field="myDate" placeholder="开始时间" v-model="date" format="yyyy/mm/dd" :backward="false" :no-today="true" :forward="true"></date-picker>
					<select name="hour1" v-model="hours1" class="timer">
						<option value="9">09</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					<b>:</b>
					<select name="minute1" v-model="minute1" class="timer">
						<option value="0">00</option>
						<option value="1">10</option>
						<option value="2">20</option>
						<option value="3">30</option>
						<option value="4">40</option>
						<option value="5">50</option>
					</select>
				</p>
				<p><span>活动结束时间：</span>
					<date-picker field="myDate" placeholder="截止时间" v-model="date1" format="yyyy/mm/dd" :backward="false" :no-today="true" :forward="true"></date-picker>
					<select name="hour2" v-model="hours2" class="timer">
						<option value="9">09</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					<b>:</b>
					<select name="minute2" v-model="minute2" class="timer">
						<option value="0">00</option>
						<option value="1">10</option>
						<option value="2">20</option>
						<option value="3">30</option>
						<option value="4">40</option>
						<option value="5">50</option>
					</select>
					
				</p>
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
	import 'babel-polyfill'; //因为使用了es6的一些方法，需要babel垫片，如果你项目中已有相关兼容性方案，可忽略
	import Vue from 'vue';
	import myDatepicker from 'vue-datepicker-simple/datepicker-2.vue'; //引入对应的组件
	export default{
		data(){
			return {
				date:'',
				date1:'',
				hours1:9,
				minute1:0,
				hours2:9,
				minute2:0
			}
		},
		components:{
			'date-picker': myDatepicker
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
	/*标题*/
	h3{
		width: 100%;
		font-weight: normal;
		text-align: center;
		font:18px/44px "微软雅黑";
	}
	/*内容*/
	.cont{
		width: 760px;
		padding: 0 20px;
		overflow: hidden;
	}
	/*每一个内容样式*/
	.cont p{
		width: 360px;height: 30px;
		padding: 0 10px 10px;
		float: left;
		font:12px/30px "微软雅黑";
	}
	/*每一个输入提示信息样式*/
	.cont p span{
		float: left;
		width: 90px;
	}
	/*每一个input框样式设置*/
	.cont p input{
		width: 200px;
		padding: 0 15px;
		height: 30px;
		border:none;
		font:12px/30px "微软雅黑";
		/*border-radius: 4px;*/
	}
	/*文本域内容设置*/
	.cont .allWidth{
		width: 740px;height: auto;
		/*margin: 0 auto;*/
	}
	.cont textarea{
		outline: none;
		border: none;
		padding: 0;
		float: left;
		width: 610px;
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
	/**/
	/*时间选择器*/
	.vue-datepicker{
		float: left;
    	top: 0px;
	}
	.leftCont p b{
		float: left;
		/*margin-top: 15px;*/
	}
	.leftCont .timer{
		float: left;
		width: 50px;
		text-align: center;
		margin: 0 5px 0;
	}
	select{
		float: left;
		height: 30px;
		width: 110px;
		margin-right: 10px;
	}
</style>
