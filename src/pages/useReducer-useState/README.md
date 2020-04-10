## useState vs useReducer

useState 初始化的 state 之间没有依赖关系，在 setState 时获取的第一个参数 prevState 中，不能获取到其它 state。
useReducer 针对于 state 之间有依赖时使用，但能用 useReducer 的也能用 useState，同样，能用 useState 的也能用 useReducer