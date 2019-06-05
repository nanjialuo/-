import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/Main.vue'
import Home from '../components/home/Home.vue'
import Manage from '../components/manage/Manage.vue'
import TodoPro from '../components/todoPro/TodoPro.vue'
import Login from '../components/login/Login.vue'
import BodyCheckIn from '../components/bodyCheck/bodyCheckIn/BodyCheckIn.vue'
import BodyCheckInfo from '../components/bodyCheck/bodyCheckInfo/BodyCheckInfo.vue'
import OwnIn from '../components/owns/ownIn/OwnIn.vue'
import OwnFilling from '../components/owns/ownFilling/OwnFilling.vue'
import InfoIn from '../components/infoCollect/infoIn/InfoIn.vue'
import InfoDetail from '../components/infoCollect/infoDetail/InfoDetail.vue'
import DetectIn from '../components/drugDetect/detectIn/DetectIn.vue'
import DetectDetail from '../components/drugDetect/detectDetail/DetectDetail.vue'
import PropertyIn from '../components/propertyRe/propertyIn/PropertyIn.vue'
import PropertyDetail from '../components/propertyRe/PropertyDetail/PropertyDetail.vue'
import EntryRecord from '../components/entryRecord/recordList/EntryRecord.vue'
import RecordTable from '../components/entryRecord/recordTable/RecordTable.vue'
import RecordVedio from '../components/entryRecord/recordVedio/RecordVedio.vue'
import AskRoom from '../components/askRoom/AskRoom.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/manage',
      component: Manage,
      children: [{
        path: '/todo',
        component: TodoPro
      }, {
        path: '/check',
        component: BodyCheckIn,
      },{
        path: '/info',
        component: BodyCheckInfo,
      },{
        path: '/owns',
        component: OwnIn,
      },{
        path: '/ownf',
        component: OwnFilling,
      },{
        path: '/infoc',
        component: InfoIn,
      },{
        path: '/infod',
        component: InfoDetail,
      },{
        path: '/detect',
        component: DetectIn,
      },{
        path: '/detectd',
        component: DetectDetail,
      },{
        path: '/prop',
        component: PropertyIn,
      },{
        path: '/propd',
        component: PropertyDetail,
      },{
        path: '/entry',
        component: EntryRecord,
      },{
        path: '/ask',
        component: AskRoom,
      },{
        path: '/rtable',
        component: RecordTable,
      },{
        path: '/rvedio',
        component: RecordVedio,
      }]
    }
  ]
})

// 导航 守卫
router.beforeEach((to, from, next) => {
  // 判断访问的是不是登录页面
  if (to.path === '/login') {
    next();
  } else {
    // 其他页面
    // 判断有没有登录过
    let token = localStorage.getItem('token');
    // 判断token有没有值
    token ? next() : next('/login');
  }
});

export default router
