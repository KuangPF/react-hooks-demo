/*
 * @Author: KuangPF
 * @Date: 2020-03-27 10:53:03
 * @Description: reducer
 * @LastEditTime : 2020-03-27 11:14:15
 * @LastEditors  : KuangPF
 */

import React, { useReducer, useEffect } from 'react';

const INCREASE = 'INCREASE';
const SET_FROZEN = 'SET_FROZEN';

const initialState = {
  count: 0,
  frozen: false,
};

const CountApp = () => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case INCREASE:
        if (state.frozen) {
          return state;
        }
        return {
          ...state,
          count: state.count + 1,
        };

      case SET_FROZEN:
        return {
          ...state,
          frozen: action.frozen,
        };
      default:
        return state;
    }
  };
  const [state, dispath] = useReducer(reducer, initialState);

  useEffect(() => {
    dispath({ type: INCREASE });
    dispath({ type: SET_FROZEN, frozen: true });
    dispath({ type: INCREASE });
  }, []);

  return <p>current count: {state.count}</p>;
};

export default CountApp;
