import React from "react";
import "./styles.css";

const userClick = texto => () => console.log(texto);

const SquareCool = () => (
  <button onClick={userClick("clicando")} className="square-cool">
    X
  </button>
);

export default SquareCool;

//Outras opçao-----------------------------

// import React, { Component } from "react";

// class SquareCool extends Component {
//   render(){
//     return <button>X x</button>
//   }
// }

// export default SquareCool;
