<template>
	<!-- 账户管理组件 -->
	<div class="leftCont">
		<!-- 信息显示 -->
		<h3>个人信息显示</h3>
		<div class="cont">
			<div class="imgs">
				<img src="/img/pic0505.jpg"/>
			</div>
			<div class="detail">
				<p><span>编号：</span><em>dfdsfs</em></p>
				<p><span>姓名：</span><em>dfdsfs</em></p>
				<p><span>性别：</span><em>dfdsfs</em></p>
				<p><span>年龄：</span><em>dfdsfs</em></p>
				<p><span>身份：</span><em>dfdsfs</em></p>
			</div>
			<img src="/img/font/change.svg" class="toChange" @click="isShow" title="修改密码"/>
		</div>
		<div class="changePass" v-show="changes">
			<div class="change">
				<h5>修改密码</h5>
				<h6><em>原密码：</em><input type="password" /></h6>
				<h6><em>新密码：</em><input type="password" /></h6>
				<p><span>确定</span><span @click="isShow()">取消</span></p>
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
	/*标题*/
	h3{
		height: 50px;
		font: 16px/50px "微软雅黑";
		text-align: center;
	}
	/*内容框样式*/
	.cont{
		width: 600px;height: 200px;
		margin:20px auto;
		/*border: 7px double #DCDCDC;*/
		border: 2px solid #DCDCDC;
		position: relative;
	}
	/*头像样式*/
	.imgs{
		float: left;
		width: 200px;height: 200px;
		border-right: 2px solid #DCDCDC;
	}
	.imgs img{
		width: 100%;height: 100%;
	}
	/*具体内容显示样式*/
	.detail{
		float: left;
		width: 200px;height: 200px;
		margin-left: 20px;
	}
	.detail p{
		height: 40px;
		font:14px/40px "微软雅黑";
	}
	.detail p span{
		float: left;
		width: 50px;
	}
	/*点击修改密码*/
	.toChange{
		position: absolute;
		top: 5px;right: 5px;
		width: 20px;height: 20px;
		cursor: pointer;
	}
	/*修改密码框*/
	.changePass{
		width: 100%;height: 100%;
		position: absolute;
		top: 0;left: 0;
		background-color: rgba(0,0,0,0.5);
	}
	.change{
		width: 280px;
		height: 170px;
		background-color: gainsboro;
		border-radius: 6px;
		position: absolute;
		top: 0;left: 0;right: 0;bottom: 0;
		margin: auto;
	}
	.change h5{
		margin: 0;padding: 0;
		height: 40px;
		text-align: center;
		font:16px/40px "微软雅黑";
		color: #000;
	}
	.change p{
		height: 39px;width: 100%;
		overflow: hidden;
		border-top: 1px solid #666666;
	}
	.change p span{
		float: left;
		width: 139px;height: 39px;
		text-align: center;
		color: #666666;
		font:14px/39px "微软雅黑";
		cursor: pointer;
	}
	.change p span:first-of-type{
		border-right: 1px solid #666666;
	}
	.change h6{
		margin: 10px 0;
		height: 30px;
	}
	.change h6 em{
		float: left;
		width: 50px;padding-left: 10px;
		color: #666666;
		font-style: normal;
		font:12px/30px "微软雅黑";
	}
	.change h6 input{
		float: left;
		height: 28px;width: 190px;
		padding-left: 10px;
		border: 1px solid #DCDCDC;
		border-radius: 4px;
		font:12px/28px "微软雅黑";
	}
</style>