<template>
	<div class="enroll">
		<ul>
			<li :class="{'check':num==1}" @click="changeClass(1)">
				<a href="#">新增报名表</a>
			</li>
			<li :class="{'check':num==2}" @click="changeClass(2)">
				<a href="#">删除报名表</a>
			</li>
			<li :class="{'check':num==3}" @click="changeClass(3)">
				<a href="#">修改报名表</a>
			</li>
			<li :class="{'check':num==4}" @click="changeClass(4)">
				<a href="#">查询报名表</a>
			</li>
			<li :class="{'check':num==5}" @click="changeClass(5)">
				<a href="#">导出报名表</a>
			</li>
		</ul>
		<div class="content">
			<!--新增报名表-->
			<div class="addEnroll" v-show="num==1">
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
					<input type="text" name="begin_time" id="begin_time"/>
					<i>0</i>
				</p>
				<p>
					<span>报名截止时间：</span>
					<input type="text" name="stop_time" id="stop_time"/>
					<i>0</i>
				</p>
				<p>
					<span>是否需要进行签到：</span>
					<input type="radio" name="sign" id="yes" value="0" checked="checked"/>是&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="radio" name="sign" id="yes" value="1" />否
				</p>
				<button>提交</button>
			</div>
			<!--删除报名表-->
			<div class="delEnroll" v-show="num==2">
				<xsearch />
				<table border="1" cellspacing="0" cellpadding="1">
					<tr><th>序号</th><th>活动名称</th><th>报名人数</th><th>总人数</th><th>截止时间</th><th>报名率</th><th colspan="4">操作</th></tr>
					<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>2</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>3</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>4</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>5</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>6</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>7</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>8</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>9</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
					<tr><td>10</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>300</td><td>400</td><td>2017-11-17 14：00</td><td>18%</td><td>详情</td><td>编辑</td><td>删除</td><td>导出</td></tr>
				</table>
				<div class="page">
					<i>上一页</i><em>1</em><em>2</em><em>3</em><em>···</em><em>11</em><em>12</em><i>下一页</i>
				</div>
			</div>
			<!--修改报名表-->
			<!--查询报名表-->
			<!--导出报名表-->
		</div>
	</div>
</template>

<script>
	import xsearch from "../pc-search.vue";
	export default {
		data() {
			return {
				num: 1
			}
		},
		methods: {
			changeClass(num) {
				this.num = num
			}
		},
		components:{
			xsearch
		}
	}
</script>

<style scoped="scoped">
	.enroll {
		width: 820px;
		min-height: 460px;
		margin: 0 10px;
		float: left;
		background-color: rgba(255,100,0, 0.3);
		color: #fff;
	}
	/*功能切换列表*/
	.enroll ul {
		height: 30px;
		/*background-color: rgba(0,0,0,0.2);*/
	}
	
	.enroll ul li {
		float: left;
	}
	
	.enroll ul li a {
		color: #fff;
		padding: 0 10px;
		font: 14px/30px "微软雅黑";
	}
	/*点击样式*/
	.enroll .check {
		background-color: rgba(255, 255, 255, 0.2);
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	/*内容*/
	.content {
		width: 800px;
		min-height: 410px;
		padding:10px;
		color: #fff;
		background-color: rgba(255, 255, 255, 0.2);
	}
	/*表格样式*/
	table{
		width: 100%;
    	text-align: center;
    	font-size: 14px;
	}
	table tr{
		height: 28px;
	}
	/*分页样式*/
	.page{
		height: 26px;
		margin: 10px auto 0;
		text-align: center;
		font: 12px/24px "微软雅黑";
		position: relative;
    	left: 50%;
    	margin-left: -190px;
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
	}
</style>