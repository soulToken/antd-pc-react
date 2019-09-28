import Login from '@/views/login/'
import Index from '@/views/index/'
import dashcord from '@/views/dashcord'

// 按需加载路由   高阶组件
import asyncComponent from '@/components/common/AsyncComponent'
let routers=[
      {
        path: '/home', 
        // component: r => require.ensure([],() => r(require('@/views/login/'),'login'))
        component: Index
      },
      {
        path: '/login', 
        // component: r => require.ensure([],() => r(require('@/views/login/'),'login'))
        component: Login
      },
      {
        path: '/index', //预测
        component: asyncComponent(() => import('@/views/dashcord/'))
      },
      {
        path: '/404', //预测-
        component: asyncComponent(() => import('@/views/nofind/'))
       
      },
     
      
]

// module.exports= routers
export default routers