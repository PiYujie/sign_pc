<template>
	<div class="pc">
		<xheader />
		<div class="content">
			<div class="title">
				<p><span>你好，{{name}}!</span></p>
				<img src="/img/font/exit.svg" @click="exit"/>
				<!--<em>站内公告：【维护】进行维护通知</em>-->
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
	import $ from 'jQuery';
	export default{
		data(){
			return{
				name:''
			}
		},
		components:{
			xheader,
			xfooter,
			xlist
		},
		methods:{
			exit(){
				sessionStorage.setItem("state",false);
				sessionStorage.setItem("status",'');
				location.href = '#/'
			}
		},
		mounted(){
			var state = sessionStorage.getItem("state");
			var id = localStorage.getItem("name");
			var _this = this;
			if(state == 'false'){
				location.href = '#/';
			}else{
				$.ajax({
					type:"post",
					url:"http://localhost:3000/getManById",
					data:{
						id:id
					},
					success(data){
						data = JSON.parse(data);
						_this.name = data[0].man_name
					}
				});
			}
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
		float: right;
		width: 20px;height: 20px;
		margin-top: 15px;
		/*vertical-align: text-bottom;*/
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