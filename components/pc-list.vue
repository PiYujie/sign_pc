<template>
	<div class="list">
		<ul>
			<li>
				<p @click="toShow(1)">
					<img src="/img/font/siginin2.svg" />
					<span>活动管理</span>
				</p>
				<ol v-show="num==1">
					<li><a href="#/index/addAct">新增活动</a></li>
					<li><a href="#/index/showAct">显示活动信息</a></li>
					<li><a href="#/index/educeAct">导出活动信息</a></li>
					<li><a href="#/index/genre">活动类别管理</a></li>
				</ol>
			</li>
			<li>
				<p @click="toShow(2)">
					<img src="/img/font/siginin2.svg" />
					<span>报名管理</span>
				</p>
				<ol v-show="num==2">
					<li><a href="#/index/addEnroll">新增报名表</a></li>
					<li><a href="#/index/showEnroll">查询报名表</a></li>
					<li><a href="#/index/educeEnroll">导出报名表</a></li>
				</ol>
			</li>
			<li>
				<p @click="toShow(3)">
					<img src="/img/font/siginin2.svg" />
					<span>签到管理</span>
				</p>
				<ol v-show="num==3">
					<li><a href="#/index/showSign">查询签到情况</a></li>
					<li><a href="#/index/educeSign">导出签到信息</a></li>
				</ol>
			</li>
			<li v-show="status">
				<p @click="toShow(4)">
					<img src="/img/font/siginin2.svg" />
					<span>学生管理</span>
				</p>
				<ol v-show="num==4">
					<li><a href="#/index/addStu">新生入学</a></li>
					<li><a href="#/index/deleteStu">学生休学</a></li>
					<li><a href="#/index/changeStu">修改信息</a></li>
				</ol>
			</li>
			<li v-show="status">
				<p @click="toShow(5)">
					<img src="/img/font/siginin2.svg" />
					<span>院系管理</span>
				</p>
				<ol v-show="num == 5">
					<li><a href="#/index/academy">学院管理</a></li>
					<li><a href="#/index/major">专业管理</a></li>
				</ol>
			</li>
			<li>
				<p @click="toShow(6)">
					<img src="/img/font/siginin2.svg" />
					<span>账户管理</span>
				</p>
				<ol v-show="num == 6">
					<li v-show="status"><a href="#/index/showMan">活动管理员管理</a></li>
					<li><a href="#/index/showOwn">个人信息管理</a></li>
				</ol>
			</li>
			
		</ul>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				num:1,
				status:''
			}
		},
		methods:{
			toShow(id){
				this.num = id;
			}
		},
		mounted(){
			var status = sessionStorage.getItem("status");
			if(status==0){
				this.status = true;
			}else{
				this.status = false;
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
	a{
		color: #fff;
	}
	a:hover{
		color: #FFA500;
	}
</style>