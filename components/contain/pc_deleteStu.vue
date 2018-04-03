<template>
	<div class="leftCont">
		<h3>学生退学或休学管理</h3>
			<div class="cont">
				<div class="search">
					<p>
						<span>请输入学生学号：</span>
						<input type="text" v-model="stu_id" />
					</p>
					<img src="/img/font/search.svg" @click="toSearchStu"/>
				</div>
				<div class="detail" v-show="isTrue">
					<p>学号：{{stu_id}}</p>
					<p>姓名：{{stu_name}}</p>
					<p>性别：{{stu_sex}}</p>
					<p>学院：{{academy}}</p>
					<p>专业：{{major}}</p>
					<p>年级：{{grade}}</p>
					<p>班级：{{classes}}</p>
					<p>义工：{{volunteer}}</p>
					<p>学分：{{credit}}</p>
					<button>休学（退学）</button>
				</div>
				<div class="error" v-show="isError">
					<h4>该学生不存在，请正确输入学号（学号由10位数字组成）</h4>
				</div>
			</div>
		</div>
</template>

<script>
	import $ from 'jQuery';
	export default{
		data(){
			return {
				isTrue:false,
				stu_id:'',
				stu_name:"皮玉婕",
				stu_sex:"女",
				academy:"电气与信息工程学院",
				major:"计算机科学与技术",
				grade:2014,
				classes:3,
				volunteer:1.6,
				credit:0.3,
				isError:false
			}
		},
		methods:{
			toSearchStu(){
				var id = this.stu_id;
				if(/^[0-9]{10}$/.test(id)){
					this.isError = false;
					this.isTrue = true
				}else{
					this.isError = true;
					this.stu_id = ''
				}
			}
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
	/*搜索样式*/
	.search{
		height: 40px;width: 400px;
		padding:0 10px;
		border: 1px solid #DCDCDC;
		border-radius: 5px;
		margin: 0 auto;
	}
	.search p{
		float: left;
		height: 40px;width: 370px;
		font:14px/40px "微软雅黑";
	}
	.search p span{
		float: left;
		width: 130px;
	}
	.search p input{
		float: left;
		height: 30px;width: 230px;
		padding-left: 10px;
		margin: 5px 0;
		border-radius: 5px;
	}
	.search img{
		float: right;
		width: 20px;height: 20px;
		margin: 10px 0;
		cursor: pointer;
	}
	/*详情*/
	.detail{
		width: 300px;
		margin: 10px auto;
	}
	.detail p{
		width: 100%;height: 30px;
		font:14px/30px "微软雅黑";
	}
	/*提交按钮样式*/
	button{
		display: block;
		border: none;
		padding: 0 15px;
		margin: 10px auto;
		height: 40px;
		font: 14px/40px "微软雅黑";
		color: #FFFFFF;
		background-color: rgba(255,100,0,0.4);
		border-radius: 8px;
		cursor: pointer;
	}
	/*错误提示*/
	.error{
		width: 250px;
		margin: 10px auto;
		border-radius: 5px;
		background-color: gainsboro;
	}
	.error h4{
		text-align: center;
		font:bold 16px/50px "微软雅黑";
		color: red;
	}
</style>