import { useState } from 'react'

const initialState = {
  count: 0,
  frozen: false
}

const useCounterApi = () => {
  const [state, setState] = useState(initialState)
  const increase = () => {
    setState(prevState => {
      if (prevState.frozen) {
        return prevState
      }
      return {
        ...prevState,
        count: state.count + 1
      }
    })
  }
  const setFrozen = (frozen:boolean) => {
    setState(prevState => {
      return {
        ...prevState,
        frozen
      }
    })
  }

  return {
    count: state.count,
    frozen: state.frozen,
    increase,
    setFrozen
  }
}

export default useCounterApi
