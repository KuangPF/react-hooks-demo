import React from 'react'
import WithGithubProfile from './withGithubProfile'

interface IProps {
  profile: any
}
interface IStates {}

class GithubProfileHoc extends React.Component<IProps, IStates> {
  render() {
    const { profile } = this.props
    return (
      <div className="profile">
        <img src={profile.avatar_url} alt="avatar" width="200px" />
        <div>name: {profile.name}</div>
        <div>followers: {profile.followers}</div>
        <div>following: {profile.following}</div>
      </div>
    )
  }
}

export default WithGithubProfile(GithubProfileHoc)
