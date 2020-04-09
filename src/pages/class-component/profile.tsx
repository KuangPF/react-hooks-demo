/*
 * @Author: KuangPF
 * @Date: 2020-02-19 11:55:28
 * @Description: render props
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-19 12:07:35
 */

import React from 'react'

interface IProps {
  children: any
}
interface IStates {
  profile: any
}

class Profile extends React.Component<IProps, IStates> {
  constructor(props:IProps) {
    super(props)
    this.state = {
      profile: {}
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/gaearon')
      .then(response => {
        return response.json()
      })
      .then(res => {
        this.setState({
          profile: res
        })
      })
  }

  render() {
    const { profile } = this.state
    return <React.Fragment>{this.props.children(profile)}</React.Fragment>
  }
}

export default Profile
