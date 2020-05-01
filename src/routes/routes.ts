/*
 * @Author: KuangPF
 * @Date: 2020-04-01 22:10:38
 * @Description: 路由文件
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 10:05:09
 */
import Home from 'pages/home'

import UseState from 'pages/base/useState'
import UseContext from 'pages/base/useContext'
import UseReducer from 'pages/base/useReducer'
import UseRef from 'pages/base/useRef'
import UseEffect from 'pages/base/useEffect'
import UseCallback from 'pages/base/useCallback'
import UseMemo from 'pages/base/useMemo'
import UseLayoutEffect from 'pages/base/useLayoutEffect'
import UseDebugValue from 'pages/base/useDebugValue'

import UseProfile from 'pages/custom-hooks-page/useProfile'
import UseInput from 'pages/custom-hooks-page/useInput'

import ClassGreet from 'pages/hooks-class/class-greet'
import HooksGreat from 'pages/hooks-class/hooks-greet'


// hide: filter out from the homepage
const routes = [
  {
    path: '/home',
    component: Home,
    hide: true
  },
  {
    path: '',
    redirect: '/home',
    hide: true
  },
  {
    name: 'basic',
    children: [
      {
        path: '/basic/useState',
        component: UseState
      },
      {
        path: '/basic/useEffect',
        component: UseEffect
      },
      {
        path: '/basic/useContext',
        component: UseContext
      }
    ]
  },
  {
    name: 'additional',
    children: [
      {
        path: '/additional/useReducer',
        component: UseReducer
      },
      {
        path: '/additional/useCallback',
        component: UseCallback
      },
      {
        path: '/additional/useMemo',
        component: UseMemo
      },
      {
        path: '/additional/useRef',
        component: UseRef
      },
      {
        path: '/additional/useLayoutEffect',
        component: UseLayoutEffect
      },
      {
        path: '/additional/useDebugValue',
        component: UseDebugValue
      }
    ]
  },
  {
    name: 'custom-hooks',
    title: 'custom hooks',
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
  },
  {
    name: 'hooks-class',
    title: 'hooks vs class',
    children: [
      {
        path: '/hooks-class/class-greet',
        component: ClassGreet
      },
      {
        path: '/hooks-class/hooks-great',
        component: HooksGreat
      }
    ]
  }
]

export default routes
