import React from "react";
import SqueareCool from "../SquareCool/index.js";

const repeticao = qtd => {
  let max = qtd;
  const caixa = [];

  while (max--) {
    caixa.push(<SqueareCool />);
  }

  return caixa;
};

const BoardCool = ({ qtd }) => <article>{repeticao(qtd)}</article>;

export default BoardCool;
