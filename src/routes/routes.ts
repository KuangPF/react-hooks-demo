/*
 * @Author: KuangPF
 * @Date: 2020-04-01 22:10:38
 * @Description: 路由文件
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-05 19:58:24
 */
import UseState from 'pages/base/useState'

const routes = [
  {
    path: '',
    redirect: '/base/useState'
  },
  {
    name: 'base',
    children: [
      {
        path: '/base/useState',
        component: UseState
      }
    ]
  }
]

export default routes
