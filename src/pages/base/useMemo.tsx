/*
 * @Author: KuangPF
 * @Date: 2020-02-15 17:11:41
 * @Description: react useMemo hooks
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-05 15:21:23
 */

import React, { useState, useMemo, Fragment } from 'react'

function UseMemoDemo() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  // useMemo 是在渲染期间执行，而 useEffect 是在 DOM 更新之后触发
  // 实现类似 pureComponent 功能
  const useMemoChild = useMemo(() => <Child count={count} />, [count])
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
      <br />
      <input value={value} onChange={e => setValue(e.target.value)} />
      {useMemoChild}
    </div>
  )
}

function Child({ count }: { count: number }) {
  console.log('child render')
  return (
    <Fragment>
      <p>useMemo hooks</p>
      <p>child count: {count}</p>
    </Fragment>
  )
}

export default UseMemoDemo
