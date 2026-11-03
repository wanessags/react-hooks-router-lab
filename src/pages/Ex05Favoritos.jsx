
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const tecnologias = [
  'React',
  'Vite',
  'React Router',
  'JavaScript',
];

export default function Ex05Favoritos() {
  const { tema } = useContext(ThemeContext);

  const [favoritos, setFavoritos] = useLocalStorage(
    'lab-favoritos',
    []
  );

  function alternarFavorito(tecnologia) {
    setFavoritos((anteriores) => {
      if (anteriores.includes(tecnologia)) {
        return anteriores.filter(
          (item) => item !== tecnologia
        );
      }

      return [...anteriores, tecnologia];
    });
  }

  function limparFavoritos() {
    setFavoritos([]);
  }

  return (
    <section className="panel">
      <span className="eyebrow">
        Exercício 05 · Integração
      </span>

      <h1>Favoritos persistentes</h1>

      <p>
        Contexto global: <strong>{tema}</strong>
        {' · '}
        Favoritos: <strong>{favoritos.length}</strong>
      </p>

      <div className="cards">
        {tecnologias.map((tecnologia) => {
          const favorito = favoritos.includes(tecnologia);

          return (
            <div className="subpanel" key={tecnologia}>
              <h2>{tecnologia}</h2>

              <button
                onClick={() => alternarFavorito(tecnologia)}
                aria-pressed={favorito}
              >
                {favorito
                  ? '★ Remover dos favoritos'
                  : '☆ Favoritar'}
              </button>
            </div>
          );
        })}
      </div>

      <p className="muted">
        Seus favoritos continuam salvos ao navegar
        entre páginas ou atualizar o navegador.
      </p>

      <div className="actions">
        <button
          className="secondary"
          onClick={limparFavoritos}
          disabled={favoritos.length === 0}
        >
          Limpar todos os favoritos
        </button>
      </div>
    </section>
  );
}
