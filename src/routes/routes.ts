/*
 * @Author: KuangPF
 * @Date: 2020-04-01 22:10:38
 * @Description: 路由文件
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 21:46:55
 */
import Home from 'pages/home'

import UseState from 'pages/base/useState'
import UseContext from 'pages/base/useContext'
import UseReducer from 'pages/base/useReducer'
import UseRef from 'pages/base/useRef'
import UseEffect from 'pages/base/useEffect'
import UseCallback from 'pages/base/useCallback'
import UseMemo from 'pages/base/useMemo'
import UseImperativeHandle from 'pages/base/useImperativeHandle'
import UseLayoutEffect from 'pages/base/useLayoutEffect'
import UseDebugValue from 'pages/base/useDebugValue'

import UseReducerCountV1 from 'pages/useReducer-useState/reducerCountV1'
import UseStateCountV1 from 'pages/useReducer-useState/stateCountV1'
import UseStateCountV2 from 'pages/useReducer-useState/stateCountV2'

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
    name: 'Basic Hooks',
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
    name: 'Additional Hooks',
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
        path: '/additional/useImperativeHandle',
        component: UseImperativeHandle
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
    name: 'useReducer vs useState',
    children: [
      {
        path: '/useReducer-useState/reducerCount-v1',
        component: UseReducerCountV1
      },
      {
        path: '/useReducer-useState/stateCount-v1',
        component: UseStateCountV1
      },
      {
        path: '/useReducer-useState/stateCount-v2',
        component: UseStateCountV2
      }
    ]
  },
  {
    name: 'custom-hooks',
    title: 'Custom Hooks',
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
    title: 'Hooks vs Class',
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
