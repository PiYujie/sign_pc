<template>
	<div class="activity">
		<ul>
			<li :class="{'check':num==1}" @click="changeClass(1)">
				<a href="#">新增活动</a>
			</li>
			<li :class="{'check':num==2}" @click="changeClass(2)">
				<a href="#">修改活动信息</a>
			</li>
			<li :class="{'check':num==3}" @click="changeClass(3)">
				<a href="#">删除活动</a>
			</li>
			<li :class="{'check':num==4}" @click="changeClass(4)">
				<a href="#">显示活动信息</a>
			</li>
			<li :class="{'check':num==5}" @click="changeClass(5)">
				<a href="#">活动详情</a>
			</li>
		</ul>
		<div class="addAct content" v-show="num==1">
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
				<p><span>活动时间：</span><input type="text" /></p>
				<p><span>报名截止时间：</span><input type="text" /></p>
				<p><span>所需人数：</span><input type="text" /></p>
				<p><span>主办单位：</span><input type="text" /></p>
				<p><span>报名条件：</span><input type="text" /></p>
				<p><span>活动奖励：</span>
					<input type="text" />
					<select name="actReward" class="actReward">
						<option value="r1" selected="selected">学分</option>
						<option value="r2">义工</option>
					</select>
					</p>
				<p><span>生成二维码：</span><input type="text" /></p>
				<p class="allWidth"><span>活动内容：</span><textarea name="cont" rows="8" cols="87"></textarea></p>
			</div>
			<button>提交</button>
		</div>
		<div class="changeAct content" v-show="num==2">
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
				<p><span>活动时间：</span><input type="text" /></p>
				<p><span>报名截止时间：</span><input type="text" /></p>
				<p><span>所需人数：</span><input type="text" /></p>
				<p><span>主办单位：</span><input type="text" /></p>
				<p><span>报名条件：</span><input type="text" /></p>
				<p><span>活动奖励：</span>
					<input type="text" />
					<select name="actReward" class="actReward">
						<option value="r1" selected="selected">学分</option>
						<option value="r2">义工</option>
					</select>
					</p>
				<p><span>生成二维码：</span><input type="text" /></p>
				<p class="allWidth"><span>活动内容：</span><textarea name="cont" rows="8" cols="87"></textarea></p>
			</div>
			<button>提交</button>
		</div>
		<div class="delAct content" v-show="num==3">
			<div class="cont">
				<p>开始时间：2017-11-17 14：00 </p>
				<p>举行地点：A211</p>
				<p>类型：科技竞赛</p>
				<p>人数：200</p>
				<p>2017年11月10日上午8时准时在比赛官网公布题目，各参赛队伍在比赛截止时间前登录比赛官网提交一篇论文。比赛分A、B、C、D题，题目类型分别为MCM（A、B题，比较注重理论和思路）和ICM（C、D题，比较注重实际应用）风格的题目，A题为研究生组，B、C题是本科组（任选一题），D题为专科组。</p>
				<p>
						奖励形式
		
		   1、比赛设特等奖、一等奖、二等奖、三等奖和优秀奖。每组设特等奖1个队伍，各奖励1000元；一、二、三等奖获得荣誉证书，分别占各组报名队数的5%、15%、25%；凡成功上交有效论文的队将获优秀奖荣誉证书。三等奖以上的论文，评委老师将提供论文评价；二等奖以上的论文，主办单位择优推荐到学术期刊免费发表。
		
		   2、比赛将根据所指导队伍的获奖情况评出“优秀指导教师”若干名。
		
		   3、比赛将根据各校的参赛情况和志愿者情况评出“优秀志愿者”和“优秀组织工作者”若干名以及“优秀组织奖”若干项。
					</p>
			</div>
			<button>删除</button>
		</div>
		<div class="detAct content" v-show="num==5">
			<div class="cont">
				<p>开始时间：2017-11-17 14：00 </p>
				<p>举行地点：A211</p>
				<p>类型：科技竞赛</p>
				<p>人数：200</p>
				<p>2017年11月10日上午8时准时在比赛官网公布题目，各参赛队伍在比赛截止时间前登录比赛官网提交一篇论文。比赛分A、B、C、D题，题目类型分别为MCM（A、B题，比较注重理论和思路）和ICM（C、D题，比较注重实际应用）风格的题目，A题为研究生组，B、C题是本科组（任选一题），D题为专科组。</p>
				<p>
						奖励形式
		
		   1、比赛设特等奖、一等奖、二等奖、三等奖和优秀奖。每组设特等奖1个队伍，各奖励1000元；一、二、三等奖获得荣誉证书，分别占各组报名队数的5%、15%、25%；凡成功上交有效论文的队将获优秀奖荣誉证书。三等奖以上的论文，评委老师将提供论文评价；二等奖以上的论文，主办单位择优推荐到学术期刊免费发表。
		
		   2、比赛将根据所指导队伍的获奖情况评出“优秀指导教师”若干名。
		
		   3、比赛将根据各校的参赛情况和志愿者情况评出“优秀志愿者”和“优秀组织工作者”若干名以及“优秀组织奖”若干项。
					</p>
			</div>
		</div>
		<div class="showAct content" v-show="num==4">
			<xsearch />
			<div class="listShow">
				<table border="1" cellspacing="0" cellpadding="1">
					<tr><th>序号</th><th>名称</th><th>类别</th><th>地点</th><th>时间</th><th>人数</th><th colspan="3">操作</th></tr>
					<tr><td>1</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>2</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>3</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>4</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>5</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>6</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>7</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>8</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>9</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
					<tr><td>10</td><td>2017年“数创杯”全国大学生数学建模挑战赛</td><td>科技竞赛</td><td>A211</td><td>2017-11-17 14：00</td><td>200</td><td>详情</td><td>编辑</td><td>删除</td></tr>
				</table>
				<div class="page">
					<i>上一页</i><em>1</em><em>2</em><em>3</em><em>···</em><em>11</em><em>12</em><i>下一页</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import xsearch from "../pc-search.vue";
	export default {
		data() {
			return {
				num: 4
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
	.activity {
		width: 820px;
		min-height: 460px;
		margin: 0 10px;
		float: left;
		background-color: rgba(255,100, 0, 0.3);
		color: #fff;
	}
	/*功能切换列表*/
	
	.activity ul {
		height: 30px;
		/*background-color: rgba(0,0,0,0.2);*/
	}
	
	.activity ul li {
		float: left;
	}
	
	.activity ul li a {
		color: #fff;
		padding: 0 10px;
		font: 14px/30px "微软雅黑";
	}
	/*点击样式*/
	
	.activity .check {
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
	/*添加活动*/
	
	.addAct {
		overflow: hidden;
	}
	
	.addAct p {
		float: left;
		width: 400px;
		padding: 5px 0;
		/*height: 26px;*/
		font: 12px/26px "微软雅黑";
	}
	.addAct p span{
		display: block;
		float: left;
		width: 90px;
	}
	.addAct p input{
		float: left;
		height: 26px;
		width: 220px;
		padding-left: 10px;
	}
	/*单选按钮*/
	.addAct p input[type="radio"]{
		padding: 0;
		width: 15px;height: 15px;
	}
	.addAct div{
		width: 100%;
		overflow: hidden;zoom: 1;
	}
	/*文本域*/
	.addAct .allWidth{
		width: 100%;
	}
	textarea{
		outline: none;
		float: left;
	}
	/*奖励选择*/
	.actReward{
		margin-left: 5px;
	}
	/*下拉菜单样式设置*/
	select{
		padding: 0 5px;
		height: 25px;
	}
	/*提交按钮*/
	button{
		display: block;
		width: 50px;height: 30px;
		margin: 10px auto;
	}
	/*修改活动信息*/
	.changeAct {
		overflow: hidden;
	}
	.changeAct p {
		float: left;
		width: 400px;
		padding: 5px 0;
		/*height: 26px;*/
		font: 12px/26px "微软雅黑";
	}
	.changeAct p span{
		display: block;
		float: left;
		width: 90px;
	}
	.changeAct p input{
		float: left;
		height: 26px;
		width: 220px;
		padding-left: 10px;
	}
	/*单选按钮*/
	.changeAct p input[type="radio"]{
		padding: 0;
		width: 15px;height: 15px;
	}
	.changeAct div{
		width: 100%;
		overflow: hidden;zoom: 1;
	}
	/*文本域*/
	.changeAct .allWidth{
		width: 100%;
	}
	/**/
	/*删除信息*/
	.delAct{
		font: 14px/20px "微软雅黑";
	}
	.detAct{
		font: 14px/20px "微软雅黑";
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
</style>