import Vue from "vue";
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 状态管理
import Vuex from 'vuex';
Vue.use(Vuex)
import moment from 'vue-moment'
Vue.use(moment); 
// 全局样式
import "./template/base.css";
import "./template/calendar.css";
//选项卡组件
//活动
import addAct from "./components/contain/pc_addAct.vue";
import showAct from "./components/contain/pc_showAct.vue";
import changeAct from "./components/contain/pc_changeAct.vue";
import detailAct from "./components/contain/pc_detailAct.vue";
import educeAct from "./components/contain/pc_educeAct.vue";
import genre from "./components/contain/pc_genre.vue";
//报名
import addEnroll from "./components/contain/pc_addEnroll.vue";
import showEnroll from "./components/contain/pc_showEnroll.vue";
import educeEnroll from "./components/contain/pc_educeEnroll.vue";
import changeEnroll from "./components/contain/pc_changeEnroll.vue";
import detailEnroll from "./components/contain/pc_detailEnroll.vue";
//签到
import educeSign from "./components/contain/pc_educeSign.vue";
import showSign from "./components/contain/pc_showSign.vue";
import detailSign from "./components/contain/pc_detailSign.vue";
//学生
import addStu from "./components/contain/pc_addStu.vue";
import deleteStu from "./components/contain/pc_deleteStu.vue";
import changeStu from "./components/contain/pc_changeStu.vue";
//院系
import academy from "./components/contain/pc_academy.vue";
import major from "./components/contain/pc_major.vue";
//账号
import showMan from "./components/contain/pc_showMan.vue";
import showOwn from "./components/contain/pc_showOwn.vue";
//容器组件
import index from "./components/tab/pc-index.vue";
// 配置路由
var router = new VueRouter({
	routes:[
		// 默认进入页面的时候跳转到登录页
		{
			path: '/',
			redirect: '/index/showAct'
		},
		//其他页面
		{
			//个人信息
			path: "/index",
            component: index,
            children:[
            	{
            		path: "addAct",
           			 component: addAct
            	},
            	{
            		path:"showAct",
            		component:showAct
            	},
            	{
            		path:"changeAct",
            		component:changeAct
            	},
            	{
            		path:"detailAct",
            		component:detailAct
            	},
            	{
            		path:"educeAct",
            		component:educeAct
            	},
            	{
            		path:"genre",
            		component:genre
            	},
            	{
            		path:"addEnroll",
            		component:addEnroll
            	},
            	{
            		path:"showEnroll",
            		component:showEnroll
            	},
            	{
            		path:"educeEnroll",
            		component:educeEnroll
            	},
            	{
            		path:"changeEnroll",
            		component:changeEnroll
            	},
            	{
            		path:"detailEnroll",
            		component:detailEnroll
            	},
            	{
            		path:"educeSign",
            		component:educeSign
            	},
            	{
            		path:"showSign",
            		component:showSign
            	},
            	{
            		path:"detailSign/:id",
            		component:detailSign
            	},
            	{
            		path:"addStu",
            		component:addStu
            	},
            	{
            		path:"deleteStu",
            		component:deleteStu
            	},
            	{
            		path:"changeStu",
            		component:changeStu
            	},
            	{
            		path:"academy",
            		component:academy
            	},
            	{
            		path:"major",
            		component:major
            	},
            	{
            		path:"showMan",
            		component:showMan
            	},
            	{
            		path:"showOwn",
            		component:showOwn
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