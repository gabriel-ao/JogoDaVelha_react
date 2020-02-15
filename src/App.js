import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadVelha();
  }

  loadVelha = async () => {};

  render() {
    const renderVelha = () => {
      const renderLinhas = () => {
        const renderPosicao = () => {
          return (
            <div
              className="div_coluna"
              style={{
                width: 200,

                borderRight: "solid",
                borderBottom: "solid"
              }}
            ></div>
          );
        };

        return (
          <div
            className="div_linha"
            style={{
              display: "flex",
              width: 600,
              height: 200
            }}
          >
            {renderPosicao()}
            {renderPosicao()}
            {renderPosicao()}
          </div>
        );
      };

      return (
        <div className="div_velha" style={{ width: 600, height: 600 }}>
          {renderLinhas()}
          {renderLinhas()}
          {renderLinhas()}
        </div>
      );
    };

    const renderTitulo = () => (
      <h1 className="titulo" style={{ textAlign: "center" }}>
        Jogo da velha
      </h1>
    );

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
    );
  }
}
export default App;
