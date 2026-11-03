
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const temas = ['claro', 'escuro', 'azul'];

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema((anterior) => {
      const indiceAtual = temas.indexOf(anterior);
      const proximoIndice = (indiceAtual + 1) % temas.length;

      return temas[proximoIndice];
    });
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
