<template>
	<div class="list">
		<ul>
			<li>
				<p @click="toShow(1)">
					<img src="/img/font/siginin2.svg" />
					<span>活动管理</span>
				</p>
				<ol v-show="num==1">
					<li>新增活动</li>
					<li>修改活动信息</li>
					<li>删除活动</li>
					<li>显示活动信息</li>
				</ol>
			</li>
			<li>
				<p @click="toShow(2)">
					<img src="/img/font/siginin2.svg" />
					<span>报名管理</span>
				</p>
				<ol v-show="num==2">
					<li>新增报名表</li>
					<li>修改报名表</li>
					<li>查询报名表</li>
					<li>删除报名表</li>
					<li>导出报名表</li>
				</ol>
			</li>
			<li>
				<p @click="toShow(3)">
					<img src="/img/font/siginin2.svg" />
					<span>签到管理</span>
				</p>
				<ol v-show="num==3">
					<li>查询签到情况</li>
					<li>导出签到信息</li>
					<li>设置签到时间</li>
				</ol>
			</li>
			<li>
				<p @click="toShow(4)">
					<img src="/img/font/siginin2.svg" />
					<span>学生管理</span>
				</p>
				<ol v-show="num==4">
					<li>新生入学</li>
					<li>学生休学</li>
					<li>修改信息</li>
				</ol>
			</li>
			<li>
				<p @click="toShow(5)">
					<img src="/img/font/siginin2.svg" />
					<span>账户管理</span>
				</p>
				<ol v-show="num == 5">
					<li>个人信息管理</li>
				</ol>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				num:1
			}
		},
		methods:{
			toShow(id){
				this.num = id;
				switch(id){
					case 2:
						location.href = "#/index/enroll"
					break;
					case 3:
					
					break;
					case 4:
					break;
					case 5:
						location.href = "#/index/account"
					break;
					default:
						location.href = "#/index/activity"
					break;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.list{
		float: left;
		width: 160px;min-height: 460px;
		color: #fff;
		background-color: rgba(255,100,0,0.3);
	}
	.list ul{
		width: 145px;
		padding-left: 15px;
	}
	.list ul li{
		width: 100%;
		cursor: pointer;
		font: 16px/40px "微软雅黑";
	}
	.list ul li p{
		font: 16px/40px "微软雅黑";
	}
	.list li p img{
		width: 20px;height: 20px;
		vertical-align: text-bottom;
	}
	/*二级菜单*/
	.list li ol{
		width: 120px;
		padding-left: 25px;
	}
	.list li ol li{
		height: 30px;
		font: 14px/30px "微软雅黑";
		/*background-color: rgba(0,0,0,0.4);*/
	}
</style>