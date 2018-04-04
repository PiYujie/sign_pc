<template>
	<div class="leftCont educeEnroll">
		<h3>导出报名信息</h3>
		<div class="search">
			<h6>
				<p>活动类型：
					<select name="actType">
						<option value="0">全部</option>
						<option value="1">文化活动</option>
						<option value="2">创业教育</option>
						<option value="3">科技创新</option>
						<option value="4">科学竞赛</option>
						<option value="5">学术讲座</option>
						<option value="6">考试预约</option>
					</select>
				</p>
				<p>
					<span>选择时间：</span>
					<date-picker field="myDate" placeholder="截止时间" v-model="date" format="yyyy/mm/dd" :backward="false" :no-today="true" :forward="true"></date-picker>
				</p>
			</h6>
			<h6>
				<p>活动地点：<input type="text" v-model="address" /></p>
				<p>
					<em>导出</em><em @click="toShow">查询</em>
				</p>
			</h6>
		</div>
		<div class="list" v-show="isShow">
			<table border="1" cellspacing="0" cellpadding="1">
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
				<tr>
					<th><input type="checkbox" name="checkAct" id="checkAct" value="all" />全选</th>
					<th>活动编号</th>
					<th>报名编号</th>
					<th>报名时间</th>
					<th>截止时间</th>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import 'babel-polyfill'; //因为使用了es6的一些方法，需要babel垫片，如果你项目中已有相关兼容性方案，可忽略
	import Vue from 'vue';
	import myDatepicker from 'vue-datepicker-simple/datepicker-2.vue';
	export default {
		data() {
			return {
				date: '',
				isShow: false,
				address: ''
			}
		},
		methods: {
			toShow() {
				this.isShow = true
			}
		},
		components: {
			'date-picker': myDatepicker
		}
	}
</script>

<style scoped="scoped">
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
	/*搜索栏样式设置*/
	/*搜索*/
	
	.search {
		width: 600px;
		height: 80px;
		margin: 0 auto;
		padding: 0 10px;
		border: 1px solid #DCDCDC;
		border-radius: 5px;
	}
	
	.search h6 {
		height: 40px;
		width: 100%;
		/*padding-bottom: 10px;*/
		font: 14px/40px "微软雅黑";
		color: #fff;
		margin: 0;
	}
	
	.search h6 p {
		float: left;
		width: 50%;
		height: 40px;
	}
	
	.search h6 p span {
		float: left;
	}
	
	.search h6 p input {
		width: 200px;
		height: 28px;
		border-radius: 4px;
		padding-left: 10px;
	}
	
	.search p em {
		float: right;
		height: 26px;
		padding: 0 25px;
		font-style: normal;
		text-align: center;
		border-radius: 4px;
		background: rgba(255, 100, 0, 0.5);
		cursor: pointer;
		font: 14px/26px "微软雅黑";
		margin-right: 22px;
		margin-top: 7px;
	}
	
	select {
		/*float: left;*/
		height: 30px;
		background-color: rgba(0, 0, 0, 0);
		font: 14px/30px "微软雅黑";
		color: #fff;
	}
	
	select option {
		color: #000;
	}
	/*table表样式*/
	
	table {
		width: 100%;
		text-align: center;
		font-size: 14px;
		margin-top: 10px;
	}
	
	table tr {
		height: 28px;
	}
</style>
<style type="text/css">
	.vue-datepicker {
		float: left;
	}
	.vue-datepicker input{
		border: none !important;
		border-radius: 5px;
	}
	.educeEnroll .vue-datepicker input{
		width: 200px;
		margin-top: 6px;
	}
</style>