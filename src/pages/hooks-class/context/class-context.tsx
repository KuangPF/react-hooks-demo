/*
 * @Author: KuangPF
 * @Date: 2020-04-12 20:13:22
 * @Description: class context
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-12 20:27:11
 */

import React from 'react'

export const theme = 'theme-golden'
export const local = '🇨🇳'

export const ThemeContext = React.createContext(theme)
export const LocalContext = React.createContext(local)