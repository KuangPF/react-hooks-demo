/*
 * @Author: KuangPF
 * @Date: 2020-04-11 22:59:49
 * @Description: hooks vs class component, hooks
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-12 21:04:10
 */

import React, { useState, useCallback, useContext, useEffect } from 'react'
import { ThemeContext, LocalContext } from './context/hooks-context'
import Row from './row'

import './style.css'

const Greet = () => {
  const name = useInput('Pengfei')
  const surName = useInput('Kuang')
  const { width } = useWindowWidth(window.innerWidth)

  const theme = useContext(ThemeContext)
  const local = useContext(LocalContext)

  useDocumentTitle(`${name.value} ${surName.value}`)

  return (
    <div className="hooks-class-page">
      <section className={theme}>
        <Row label="Name">
          <input {...name} />
        </Row>
        <Row label="Surname">
          <input {...surName} />
        </Row>
        <Row>{local}</Row>
        <Row label="Width">{width}</Row>
      </section>
    </div>
  )
}

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [])

  return {
    value,
    onChange
  }
}

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title
  }, [title])
}

const useWindowWidth = initialWidth => {
  const [width, setWidth] = useState(initialWidth)

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return { width }
}
export default Greet
