import React from 'react'

interface IProps {}
interface IStates {
  profile: any
}

class GithubProfile extends React.PureComponent<IProps, IStates> {
  state: IStates = {
    profile: {}
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
    return (
      <div className="profile">
        <img src={profile.avatar_url} alt="avatar" width="200px" />
        <div>name: {profile.name}</div>
        <div>company: {profile.company}</div>
        <div>bio: {profile.bio}</div>
      </div>
    )
  }
}

export default GithubProfile
