/*
 * @Author: KuangPF
 * @Date: 2020-05-01 10:02:38
 * @Description: useLayoutEffect
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 15:42:58
 */
import React, { useState, useEffect, useLayoutEffect } from 'react'

const useLayoutEffectDemo = () => {
  const [value, setValue] = useState(0)
  const [valueLayout, setValueLayout] = useState(0)

  useLayoutEffect(() => {
    if (valueLayout === 0) {
      setValueLayout(10 + Math.random() * 200)
    }
  }, [valueLayout])

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  return (
    <div>
      <p>1. 在 useEffect 中 setValue 会出现闪烁</p>
      <div onClick={() => setValue(0)}>value: {value}</div>
      <p>2. 在 useLayoutEffect 中 setValue 不会出现闪烁</p>
      <div onClick={() => setValueLayout(0)}>value: {valueLayout}</div>
    </div>
  )
}

export default useLayoutEffectDemo
