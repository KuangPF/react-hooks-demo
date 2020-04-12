/*
 * @Author: KuangPF
 * @Date: 2020-04-11 23:00:51
 * @Description: row
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-11 23:00:59
 */

import React from 'react'

export default function Row(props) {
  return (
    <div className='row'>
      <span className="row-title">{props.label}</span>
      <span className="row-content">{props.children}</span>
    </div>
  )
}