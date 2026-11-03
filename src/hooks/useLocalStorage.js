
import { useEffect, useState } from 'react';

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = window.localStorage.getItem(chave);

      return salvo === null
        ? valorInicial
        : JSON.parse(salvo);
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(
        chave,
        JSON.stringify(valor)
      );
    } catch {
      console.warn('Não foi possível salvar os dados.');
    }
  }, [chave, valor]);

  return [valor, setValor];
}
