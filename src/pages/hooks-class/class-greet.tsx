/*
 * @Author: KuangPF
 * @Date: 2020-04-11 22:59:17
 * @Description: hooks vs class component, class
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-12 20:23:51
 */
import React from 'react'
import { ThemeContext, LocalContext } from './context/class-context'
import Row from './row'

interface IState {
  name: string
  surname: string
  windowWidth: number
}

class Greet extends React.Component<{}, IState> {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Pengfei',
      surname: 'Kuang',
      windowWidth: window.innerWidth
    }
  }

  componentDidMount() {
    const { name, surname } = this.state
    document.title = `${name} ${surname}`
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    const { name, surname } = this.state
    document.title = `${name} ${surname}`
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSurnameChange = e => {
    this.setState({
      surname: e.target.value
    })
  }
  render() {
    const { name, surname, windowWidth } = this.state
    return (
      <ThemeContext.Consumer>
        {theme => (
          <section className={theme}>
            <Row label="Name">
              <input value={name} onChange={this.handleNameChange} />
            </Row>
            <Row label="Surname">
              <input value={surname} onChange={this.handleSurnameChange} />
            </Row>
            <LocalContext.Consumer>{local => <Row label="Language">{local}</Row>}</LocalContext.Consumer>
            <Row label="Widht">{windowWidth}</Row>
          </section>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Greet
