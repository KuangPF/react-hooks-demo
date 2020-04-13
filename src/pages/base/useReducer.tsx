/*
 * @Author: KuangPF
 * @Date: 2020-02-15 16:28:10
 * @Description: react useReducer hooks
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-13 18:52:18
 */

import React, { useReducer, useRef } from 'react'

// useReducer 是另一种 useState 的形式，它能在更复杂的场景下使用，能用 useState 的一定能用 useReducer

function UseReducerDemo() {
  const valueRef = useRef({} as any)
  const [count, dispatch] = useReducer(state => {
    return state + 1
  }, 0)

  const [list, listDispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            index: state.length,
            name: action.name
          }
        ]

      case 'delete':
        return state.filter((item: any) => item.index !== action.index)

      default:
        return []
    }
  }, [])

  function handleSubmit(e: any) {
    e.preventDefault()
    listDispatch({
      type: 'add',
      name: valueRef.current.value
    })
    // reset
    valueRef.current.value = ''
  }
  return (
    <div>
      <p>1. 使用 useReduer 代替 useState:</p>
      <p>count: {count}</p>
      <button
        onClick={() => {
          dispatch()
        }}
      >
        add
      </button>
      <br />
      <p>2. 增删 list</p>
      <form onSubmit={handleSubmit}>
        <input ref={valueRef} />
      </form>
      <ul>
        {list.map((item: any, index: number) => {
          return (
            <li key={index}>
              {item.name}{' '}
              <button
                onClick={() => {
                  listDispatch({
                    index,
                    type: 'delete'
                  })
                }}
              >
                x
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UseReducerDemo
