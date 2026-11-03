
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

export default function Ex03Context() {
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <section className="panel">
      <span className="eyebrow">
        Exercício 03 · Context API
      </span>

      <h1>Tema global compartilhado</h1>

      <p>
        Tema atual: <strong>{tema}</strong>
      </p>

      <button onClick={alternarTema}>
        Alternar tema
      </button>

      <p className="muted">
        Clique no botão para alternar entre os temas
        claro, escuro e azul.
      </p>

      <p className="muted">
        Navegue para outro exercício e volte.
        O tema continuará selecionado porque o
        ThemeProvider está acima das rotas.
      </p>
    </section>
  );
}
