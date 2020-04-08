/*
 * @Author: KuangPF
 * @Date: 2020-02-21 22:05:55
 * @Description: useInput custom hooks
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-22 22:15:15
 */

import { useState } from 'react'

const useInput = (initialValue:string) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e:any) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}

export default useInput
