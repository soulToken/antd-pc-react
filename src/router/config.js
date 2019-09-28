import asyncComponent from '@/components/common/AsyncComponent'

export default  [ // 菜单相关路由
      // { key: '/home', title: '首页1', icon: 'mobil1e', component: asyncComponent(() => import('@/views/login')) },
      { key: '/home/index', title: '首页', icon: 'mobile', component: asyncComponent(() => import('@/views/dashcord')) },
      {
        //  key: '/home/ui/buttons', title: '按钮', component: asyncComponent(() => import('@/views/button'))
          key: '/home/ui', title: 'UI', icon: 'scan',
          subs: [
              { key: '/home/ui/buttons', title: '按钮', component: asyncComponent(() => import('@/views/button'))},
           
          ],
      }
  ]
