/*
 * @Author: KuangPF
 * @Date: 2020-04-01 22:10:38
 * @Description: 路由文件
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-10 21:50:49
 */
import UseState from 'pages/base/useState'
import UseReducer from 'pages/base/useReducer'
import UseRef from 'pages/base/useRef'

import UseProfile from 'pages/custom-hooks-page/useProfile'
import UseInput from 'pages/custom-hooks-page/useInput'

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
      },
      {
        path: '/base/useReducer',
        component: UseReducer
      },
      {
        path: '/base/useRef',
        component: UseRef
      },
    ]
  },
  {
    name: 'custom-hooks',
    children: [
      {
        path: '/custom-hooks/useProfile',
        component: UseProfile
      },
      {
        path: '/custom-hooks/useInput',
        component: UseInput
      }
    ]
  }
]

export default routes
