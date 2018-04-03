<template>
	<div class="search" id="searchBar">
		<span>显示活动类别：</span>
		<select name="actType">
			<option value="s1" selected="selected">全部</option>
			<option value="s2">标题</option>
			<option value="s3">内容</option>
			<option value="s4">时间</option>
			<option value="t5">地点</option>
			<option value="t6">单位</option>
			<option value="t7">类别</option>
		</select>
		<p>
			<img class="none" src="/img/font/sousuo.svg"  v-show="isShow"/>
			<input type="text" id="input"  v-show="isShow"  autofocus="autofocus"/>
			<img class="none" v-show="isShow" @click="clear" src="/img/font/no.svg" />
			<span @click="toShow" v-show="!isShow"><img src="/img/font/sousuo.svg"/><b>搜索</b></span>

		</p>
		<em @click="notShow" v-show="isShow">取消</em>
		<strong><img src="/img/font/add.svg" title="新增"/></strong>
	</div>
</template>

<script>
	import $ from 'jQuery';
	export default {
		data(){
			return {
				isShow:false
			}
		},
		methods: {
			changeClass(num) {
				this.num = num
			},
			clear() {
				$("#input").val("")
			},
			notShow() {
				this.isShow = false;
			},
			toShow() {
//				$("#input").focus();
//				$("#searchBar").addClass("search-check");
				this.isShow = true
			}
		}
	}
</script>

<style scoped="scoped">
	/*搜索栏样式设置*/
	.search {
		width: 100%;height: 40px;
		box-sizing: border-box;
		padding: 5px 10px;
	}
	.search span{
		float: left;
		font:14px/30px "微软雅黑";
	}
	/*下拉菜单*/
	select{
		float: left;height: 30px;
		background-color: rgba(0,0,0,0);
		font:14px/30px "微软雅黑";
	}
	/*搜索框*/
	.search p{
		float: left;
		width: 300px;height: 22px;
		border: 1px solid #fff;
		border-radius: 14px;
		position: relative;
		padding: 0 10px;
		margin:3px 10px 3px 110px;
		/*margin: 0 auto;*/
	}
	.search p img{
		float: left;
		width: 16px;height: 16px;
		margin-top: 3px;
	}
	.search em{
		cursor: pointer;
		font-style: normal;
		font:12px/28px "微软雅黑";
	}
	/*定位样式*/
	.search p span{
		position: absolute;
		width: 100%;height: 16px;
		font:12px/15px "微软雅黑";
		margin-top: 3px;
		left: 0;
		text-align: center;
	}
	.search p span img{
		float: none;
		vertical-align: text-bottom;
		margin: 0;
	}
	.search p span b{
		padding-left: 5px;
	}
	/*搜索框*/
	.search p input{
		float: left;
		width: 255px;height: 22px;
		padding-left: 5px;
		background-color: rgba(255,255,255,0);
	}
	/*隐藏样式*/
	/*.search .none{
		display: none;
	}*/
	/*点击样式改变*/
	/*.search-check p .none{
		display: block;
	}
	.search-check p span{
		display: none;
	}
	.search-check em{
		
	}*/
	/*新增按钮样式*/
	.search strong{
		float: right;
		width: 20px;height: 20px;
		margin: 5px 0;
	}
	.search strong img{
		border: 0;
		width: 100%;
		cursor: pointer;
	}
</style>