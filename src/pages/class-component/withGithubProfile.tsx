/*
 * @Author: KuangPF
 * @Date: 2020-02-18 21:46:36
 * @Description: github profile hoc
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-19 11:57:34
 */
import React from 'react'

interface IProps {}
interface IStates {
  profile: any
}

const withGithubProfile = (WrappedComponent:any) => {
  return class extends React.Component<IProps, IStates> {
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
      return <WrappedComponent profile={profile} {...this.props} />
    }
  }
}

export default withGithubProfile
