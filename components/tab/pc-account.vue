<template>
	<!-- 账户管理组件 -->
	<div class="account">
		<!-- 信息显示 -->
		<h3><span>个人信息显示</span></h3>
		<div class="cont">
			<div class="imgs">
				<img src="/img/pic0505.jpg"/>
			</div>
			<p><span>编号：</span><em>dfdsfs</em></p>
			<p><span>姓名：</span><em>dfdsfs</em></p>
			<p><span>性别：</span><em>dfdsfs</em></p>
			<p><span>年龄：</span><em>dfdsfs</em></p>
			<p><span>身份：</span><em>dfdsfs</em></p>
			<p><i @click="isShow()">修改密码</i></p>
		</div>
		<div class="changePass" v-show="changes">
			<div class="change">
				<h3>修改密码</h3>
				<p><span>原密码：</span><input type="password" /></p>
				<p><span>新密码：</span><input type="password" /></p>
				<p><button>确定</button><button @click="isShow()">取消</button></p>
				
			</div>
		</div>
		
		<!-- 弹出框：修改密码 -->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				changes:false,
				num:1
			}
		},
		methods:{
			isShow(){
				this.changes = !this.changes
			}
		}
	}
</script>

<style scoped="scoped">
	.account{
		width: 820px;
		min-height: 460px;
		margin: 0 10px;
		float: left;
		background-color: rgba(255,150,0, 0.3);
		color: #fff;
		position: relative;
	}
	/*标题*/
	h3{
		width: 100%;height: 30px;
	}
	h3 span{
		float: left;
		color: #fff;
		padding: 0 10px;
		font: 14px/30px "微软雅黑";
		/*background-color: rgba(255, 255, 255, 0.2);*/
	}
	/*头像*/
	.imgs{
		width: 200px;height: 180px;
		float: left;
		margin-right: 30px;
	}
	.imgs img{
		width: 200px;height: 180px;
	}
	.cont{
		float: left;
		width: 400px;
		margin: 20px;
	}
	.cont p{
		height: 30px;
		font:16px/30px "微软雅黑";
	}
	.cont p span{
		float: left;
		width: 60px;
	}
	.cont p em{
		float: left;
	}
	.cont p i{
		font-style: normal;
		cursor: pointer;
	}
	/*修改密码弹出层*/
	.changePass{
		width: 100%;height: 100%;
		position: absolute;
		top: 0;left: 0;
		z-index: 1;
		background-color: rgba(255,255,255, 0.2);
	}
	.change{
		width: 300px;
		height: 200px;
		position: absolute;
		top: 50%;left: 50%;
		margin-top: -100px;
		margin-left: -150px;
		z-index: 3;
		background-color: rgba(255,150,0, 0.4);
	}
	.change h3{
		width: 260px;height: 30px;
		padding:10px 20px;
		font:14px/30px "微软雅黑";
		text-align: center;
	}
	.change p{
		height: 30px;width: 200px;
		margin: 0 auto 20px;
	}
	.change p span{
		float: left;
		width: 50px;
	}
	.change p input{
		float: left;
		height: 30px;width: 150px;
		font:14px/30px "微软雅黑";
		background-color: rgba(255,255,255,0);
		border-bottom: 1px solid #ff9600;
	}
	.change p button{
		width: 60px;height: 30px;
		float: left;
		color: #fff;
		/*background-color: rgba(255,150,0, 0.7);*/
		margin: 0 20px;
		border-radius: 4px;
		background: linear-gradient(to bottom,orange,rgba(255,150,0, 0.7));
	}
</style>