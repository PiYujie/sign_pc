<template>
	<div class="addEnroll leftCont">
		<h3>修改报名信息</h3>
		<p>
			<span>活动名称：</span>
			
		</p>
		<p>
			<span>报名开始时间：</span>
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
		<p>
			<span>报名截止时间：</span>
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
		<p>
			<span>是否需要进行签到：</span>
			<input type="radio" name="sign" id="yes" value="0" checked="checked" />是&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="radio" name="sign" id="yes" value="1" />否
		</p>
		<button>提交</button>
	</div>
</template>

<script>
	import 'babel-polyfill'; //因为使用了es6的一些方法，需要babel垫片，如果你项目中已有相关兼容性方案，可忽略
//	import Vue from 'vue';
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
		},
		mounted(){
			
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
	/*时间选择器*/
	.vue-datepicker{
		float: left;
    	top: 15px;
	}
	/**/
	.addEnroll p b{
		float: left;
		margin-top: 15px;
	}
	.addEnroll .timer{
		/*display: block;*/
		width: 50px;
		text-align: center;
		margin: 15px 5px 0;
	}
</style>