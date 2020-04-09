/*
 * @Author: KuangPF
 * @Date: 2020-04-09 20:35:52
 * @Description: useProfile demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-09 21:04:18
 */

import { useState, useEffect } from 'react'

type TProfile = {
  avatar_url: string
  name: string
  company: string
  bio: string
}

const usePropfile = () => {
  const [profile, setProfile] = useState({} as TProfile)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.github.com/users/gaearon')
      .then(response => {
        return response.json()
      })
      .then(res => {
        setProfile(res as TProfile)
        setIsError(false)
        setLoading(false)
      }).catch(()=> {
        setIsError(true)
        setLoading(false)
      })
  }, [])

  return { profile, loading,isError }
}

export default usePropfile
