/*
 * @Author: KuangPF
 * @Date: 2020-02-13 15:58:05
 * @Description: 自定义 useWindowWidth hooks demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-15 11:31:03
 */

import React from 'react'
import { useWindowWidth } from '../../custom-hooks/useWindowWidth'

const WindowWidthHook = () => {
  const width = useWindowWidth() // custom hook
  return <p>the window width is {width}px</p>
}

export default WindowWidthHook
