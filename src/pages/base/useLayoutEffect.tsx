/*
 * @Author: KuangPF
 * @Date: 2020-05-01 10:02:38
 * @Description: useLayoutEffect
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 10:03:51
 */
import React, { useState, useLayoutEffect } from 'react'

const useLayoutEffectDemo = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div onClick={() => setValue(0)}>value: {value}</div>
  );
};

export default useLayoutEffectDemo