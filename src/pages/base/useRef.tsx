/*
 * @Author: KuangPF
 * @Date: 2020-02-13 20:17:53
 * @Description: reat hooks useRef demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-15 17:30:50
 */

import React, { useRef, useEffect, useState } from 'react'

function useRefDemo() {
  const [count, setCount] = useState(0)

  // 获取组件实例或者 DOM 对象
  const buttonRef = useRef(null)
  // 保存数据
  const prevCountRef = useRef(-1)

  useEffect(() => {
    console.log(count)
    prevCountRef.current = count
  })
  const prevCount = prevCountRef.current

  useEffect(() => {
    console.log(buttonRef)
  })

  return (
    <React.Fragment>
      <Button ref={buttonRef} />
      <br />
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        prevCount: {prevCount} count: {count}
      </button>
    </React.Fragment>
  )
}


class Button extends React.Component {
  state = {
    count: 0
  }
  handleCount = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }
  render() {
    const { count } = this.state
    return <button onClick={this.handleCount}>custom button, count: {count}</button>
  }
}

export default useRefDemo
