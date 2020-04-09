/*
 * @Author: KuangPF
 * @Date: 2020-02-19 12:01:28
 * @Description: test render props
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-19 12:08:49
 */

import React from 'react'
import Profile from './profile'

class ProfileRenderProps extends React.PureComponent {
  render() {
    return (
      <Profile>
        {(profile:any) => (
          <div className="profile">
            <img src={profile.avatar_url} alt="avatar" width="200px" />
            <div>name: {profile.name}</div>
            <div>company: {profile.company}</div>
            <div>bio: {profile.bio}</div>
          </div>
        )}
      </Profile>
    )
  }
}

export default ProfileRenderProps