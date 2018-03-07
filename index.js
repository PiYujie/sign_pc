import Vue from "vue";
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
// 全局样式
import "./template/base.css";
//选项卡组件
import activity from "./components/tab/pc-activity.vue";
import enroll from "./components/tab/pc-enroll.vue";
import account from "./components/tab/pc-account.vue";
//容器组件
import index from "./components/tab/pc-index.vue";
// 配置路由
var router = new VueRouter({
	routes:[
		// 默认进入页面的时候跳转到登录页
		{
			path: '/',
			redirect: '/index/activity'
		},
		//其他页面
		{
			//个人信息
			path: "/index",
            component: index,
            children:[
            	{
            		path: "activity",
           			 component: activity
            	},
            	{
            		path:"enroll",
            		component:enroll
            	},
            	{
            		path:"account",
            		component:account
            	}
            ]
		}
	]
})
new Vue({
	el: "#app",
	router,
	template: `
        <div>
            <router-view></router-view> 
        </div>
    `
})