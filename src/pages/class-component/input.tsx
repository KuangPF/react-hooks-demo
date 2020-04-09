/*
 * @Author: KuangPF
 * @Date: 2020-02-20 21:51:00
 * @Description: input onChange
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-20 22:33:11
 */

import React from 'react'

interface IProps {
  name: string
}
interface IStates {
  name: string
}

class Input extends React.Component<IProps, IStates> {
  state: IStates = {
    name: ''
  }

  handleOnchange = (e:any) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <p>input name: {name}</p>
        <input value={name} onChange={this.handleOnchange} />
      </div>
    )
  }
}

export default Input
