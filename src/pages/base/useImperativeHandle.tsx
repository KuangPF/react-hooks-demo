/*
 * @Author: KuangPF
 * @Date: 2020-05-01 15:26:14
 * @Description: useImperativeHandle demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 15:51:47
 */
import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

function FancyInput(props, ref) {
  const inputRef = useRef(null as any)
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef} />
}

const FancyInputRef = forwardRef(FancyInput)

const useImperativeHandleDemo = () => {
  const inputRef = useRef(null as any)

  useEffect(() => {
    inputRef.current.focus()
  })

  return <FancyInputRef ref={inputRef} />
}

export default useImperativeHandleDemo
