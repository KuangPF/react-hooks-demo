### React hooks

#### useState
`useState` 是为了让 function component 具有 class component `state` 功能，使用方法如下：
``` tsx
function useStateDemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
    </div>
  )
}
```
`useState` 接收一个初始化 `state` 值的参数，返回值为当前 `state` 以及更新 `state` 的函数。
