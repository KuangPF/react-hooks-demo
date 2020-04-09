/*
 * @Author: KuangPF
 * @Date: 2020-03-27 13:50:28
 * @Description: stateCountV1
 * @LastEditTime : 2020-03-27 13:59:43
 * @LastEditors  : KuangPF
 */

import React, { useState, useEffect } from 'react';

const CountApp = () => {
  const [state, setState] = useState({
    count: 0,
    frozen: false,
  });

  const increase = () => {
    setState(prevState => {
      if (prevState.frozen) {
        return prevState;
      }
      return {
        ...prevState,
        count: state.count + 1,
      };
    });
  };

  const setFrozen = () => {
    setState(prevState => {
      return {
        ...prevState,
        frozen: true,
      };
    });
  };

  useEffect(() => {
    increase();
    setFrozen();
    increase();
  }, []);

  return <p>current count: {state.count}</p>;
};

export default CountApp