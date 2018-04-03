<template>
	<div class="page">
		<i>上一页</i><em>1</em><em>2</em><em>3</em><em>···</em><em>11</em><em>12</em><i>下一页</i>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
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
	/*添加活动表样式*/
	.addEnroll p{
		height: 60px;
		width: 600px;
		margin: 0 auto;
		font:14px/30px  "微软雅黑";
	}
	.addEnroll p span{
		float: left;
		width: 150px;
		font:16px/60px "微软雅黑";
	}
	.addEnroll p select{
		float: left;
		height: 30px;
		margin-top: 15px;
	}
	.addEnroll p input[type="text"]{
		float: left;
		background-color: rgba(0,0,0,0);
		height: 30px;width: 400px;
		margin-top: 10px;
		border-bottom: 1px solid #fff;
		font:14px/30px  "微软雅黑";
	}
	.addEnroll p i{
		float: right;
	}
		/*单选按钮*/
	.addEnroll p input[type="radio"]{
		margin-top: 23px;
	}
	.addEnroll button{
		display: block;
		width: 120px;height: 40px;
		margin: 20px auto;
		border-radius: 4px;
		background: rgba(255,100,0,0.5);
    	color: #fff;
    	font:16px/40px  "微软雅黑";
	}
</style>