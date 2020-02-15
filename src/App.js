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
    const renderVelha = () => (
      <div
        className="div_velha"
        style={{ display: "flex", width: 600, height: 600, background: "blue" }}
      ></div>
    )
    const renderTitulo = () => (
      <h1 style={{ textAlign: "center" }}>Jogo da velha</h1>
    )

    return (
      <div className="div_principal">
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center"
          }}
        >
          <div>
            {renderTitulo()}
            {renderVelha()}
          </div>
        </div>
      </div>
    )
  }
}
export default App
