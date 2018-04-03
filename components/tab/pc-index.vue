<template>
	<div class="pc">
		<xheader />
		<div class="content">
			<div class="title">
				<p><span>你好，wmtimes!</span><img src="/img/font/exit.svg"/></p>
				<em>站内公告：【维护】进行维护通知</em>
			</div>
			<div class="cont">
				<xlist />
				<router-view></router-view>
			</div>
			
		</div>
		<xfooter />
	</div>
</template>

<script>
	//公共组件
	import xfooter from "../pc-footer.vue";
	import xheader from "../pc-header.vue";
	import xlist from "../pc-list.vue";
	export default{
		components:{
			xheader,
			xfooter,
			xlist
		}
	}
</script>

<style scoped="scoped">
	.content{
		width: 1000px;
		overflow: hidden;
		margin: 0 auto;
		padding-bottom: 10px;
		background-color: rgba(255,255,255,0.2);
	}
	.title{
		height: 50px;margin-bottom: 10px;
		width: 100%;
		color: #fff;
		font:14px/50px "微软雅黑";
		background-color: rgba(255,100,0,0.3);
	}
	.title img{
		width: 20px;
		vertical-align: text-bottom;
	}
	.title p{
		float: left;
		padding-left: 10px;
	}
	.title p span{
		padding-right: 20px;
	}
	.title em{
		float: right;
		font-style: normal;
		padding-right: 15px;
	}
	.cont{
		width: 100%;
		min-height: 460px;
	}
</style>