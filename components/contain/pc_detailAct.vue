<template>
	<div class="detAct leftCont">
		<div class="cont">
			<p>活动名称： </p>
			<p>活动时间：2017-11-17 14：00 -- 2017-11-17 16：00</p>
			<p>活动条件：无</p>
			<p>举行地点：A211</p>
			<p>类型：科技竞赛</p>
			<p>人数：200</p>
			<p>奖励：0.2学分</p>
			<p>2017年11月10日上午8时准时在比赛官网公布题目，各参赛队伍在比赛截止时间前登录比赛官网提交一篇论文。比赛分A、B、C、D题，题目类型分别为MCM（A、B题，比较注重理论和思路）和ICM（C、D题，比较注重实际应用）风格的题目，A题为研究生组，B、C题是本科组（任选一题），D题为专科组。</p>
			<p>
				奖励形式 1、比赛设特等奖、一等奖、二等奖、三等奖和优秀奖。每组设特等奖1个队伍，各奖励1000元；一、二、三等奖获得荣誉证书，分别占各组报名队数的5%、15%、25%；凡成功上交有效论文的队将获优秀奖荣誉证书。三等奖以上的论文，评委老师将提供论文评价；二等奖以上的论文，主办单位择优推荐到学术期刊免费发表。 2、比赛将根据所指导队伍的获奖情况评出“优秀指导教师”若干名。 3、比赛将根据各校的参赛情况和志愿者情况评出“优秀志愿者”和“优秀组织工作者”若干名以及“优秀组织奖”若干项。
			</p>
			<p>
				奖励形式 1、比赛设特等奖、一等奖、二等奖、三等奖和优秀奖。每组设特等奖1个队伍，各奖励1000元；一、二、三等奖获得荣誉证书，分别占各组报名队数的5%、15%、25%；凡成功上交有效论文的队将获优秀奖荣誉证书。三等奖以上的论文，评委老师将提供论文评价；二等奖以上的论文，主办单位择优推荐到学术期刊免费发表。 2、比赛将根据所指导队伍的获奖情况评出“优秀指导教师”若干名。 3、比赛将根据各校的参赛情况和志愿者情况评出“优秀志愿者”和“优秀组织工作者”若干名以及“优秀组织奖”若干项。
			</p>
			<p>
				奖励形式 1、比赛设特等奖、一等奖、二等奖、三等奖和优秀奖。每组设特等奖1个队伍，各奖励1000元；一、二、三等奖获得荣誉证书，分别占各组报名队数的5%、15%、25%；凡成功上交有效论文的队将获优秀奖荣誉证书。三等奖以上的论文，评委老师将提供论文评价；二等奖以上的论文，主办单位择优推荐到学术期刊免费发表。 2、比赛将根据所指导队伍的获奖情况评出“优秀指导教师”若干名。 3、比赛将根据各校的参赛情况和志愿者情况评出“优秀志愿者”和“优秀组织工作者”若干名以及“优秀组织奖”若干项。
			</p>
		</div>
		<div class="doEvent">
			<a href="#/index/changeAct">修改</a>
			<span @click="toDelete">删除</span>
		</div>
		<div class="message" v-show="isShow">
			<h3>提示</h3>
			<b>您确定删除这条记录吗？</b>
			<p><span>确认</span><span  @click="toDelete">取消</span></p>		
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isShow:false
			}
		},
		methods:{
			toDelete(){
				this.isShow = !this.isShow;
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
		position: relative;
	}
	.leftCont .cont{
		width: 100%;height: 400px;
		overflow:auto;overflow-x:hidden;
	}
	.cont p{
		font:14px/26px "微软雅黑";
	}
	.doEvent{
		width: 180px;height: 40px;
		margin: 0 auto;
		font: 16px/30px "微软雅黑";
		text-align: center;
	}
	.doEvent a{
		float: left;
		color: #fff;
		width: 60px;height: 30px;
		margin-top: 10px;
		background-color: rgba(255,100,0,0.3);
		border-radius: 6px;
	}
	.doEvent span{
		float: right;
		margin-top: 10px;
		color: #fff;
		width: 60px;height: 30px;
		background-color: rgba(255,100,0,0.3);
		border-radius: 6px;
		cursor: pointer;
	}
	.message{
		position: absolute;
		width: 200px;height: 130px;
		top: 50%;margin-top: -75px;
		left: 50%;margin-left: -100px;
		background-color: #fff;
	}
	.message h3{
		width: 100%;
		height: 30px;
		box-sizing: border-box;
		padding-left: 15px;
		background-color: rgba(255,100,0,0.4);
		font:14px/30px "微软雅黑";
	}
	.message b{
		display: block;
		width: 100%;height: 50px;
		font:14px/50px "微软雅黑";
		text-align: center;
		color: #FFA500;
	}
	.message p{
		width: 110px;height: 30px;
		margin: 0 auto;
	}
	.message span{
		float: left;
		margin-left: 10px;
		width: 40px;
		background-color: rgba(255,100,0,0.4);
		font:14px/30px "微软雅黑";
		text-align: center;
		cursor: pointer;
	}
</style>