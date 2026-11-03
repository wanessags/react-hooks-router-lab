
import { useState } from 'react';

export function useCounter(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  function aumentar() {
    setContador((anterior) => anterior + 1);
  }

  function diminuir() {
    setContador((anterior) => anterior - 1);
  }

  function somarCinco() {
    setContador((anterior) => anterior + 5);
  }

  function zerar() {
    setContador(valorInicial);
  }

  return {
    contador,
    aumentar,
    diminuir,
    somarCinco,
    zerar,
  };
}
