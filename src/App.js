import React, { Component } from "react"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.loadVelha()
  }

  loadVelha = async () => {}

  render() {
    return <div>Olá mundo</div>
  }
}
export default App
