/*
 * @Author: KuangPF
 * @Date: 2020-03-27 13:50:28
 * @Description: stateCountV1
 * @LastEditTime : 2020-03-27 13:59:43
 * @LastEditors  : KuangPF
 */

import React, { useState, useEffect, useCallback } from 'react'

const CountApp = () => {
  const [state, setState] = useState({
    count: 0,
    frozen: false
  })

  const increase = useCallback(() => {
    setState(prevState => {
      if (prevState.frozen) {
        return prevState
      }
      return {
        ...prevState,
        count: prevState.count + 1
      }
    })
  }, [])

  const setFrozen = useCallback(() => {
    setState(prevState => {
      return {
        ...prevState,
        frozen: true
      }
    })
  }, [])

  useEffect(() => {
    increase()
    setFrozen()
    increase()
  }, [increase, setFrozen])

  return <p>current count: {state.count}</p>
}

export default CountApp
