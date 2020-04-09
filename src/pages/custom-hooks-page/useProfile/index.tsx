/*
 * @Author: KuangPF
 * @Date: 2020-04-09 20:39:54
 * @Description: useProfile page
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-09 21:03:00
 */

import React from 'react'
import useProfile from '../../custom-hooks/useProfile'

const UseProfilePage = () => {
  const { profile, loading, isError } = useProfile()

  return (
    <React.Fragment>
      {isError ? (
        <div>Network Error...</div>
      ) : (
        <div className="profile">
          {loading ? (
            <div>loading profile...</div>
          ) : (
            <React.Fragment>
              <img src={profile.avatar_url} alt="avatar" width="200px" />
              <div>name: {profile.name}</div>
              <div>company: {profile.company}</div>
              <div>bio: {profile.bio}</div>
            </React.Fragment>
          )}
        </div>
      )}
    </React.Fragment>
  )
}

export default UseProfilePage
