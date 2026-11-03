
import { useEffect, useState } from 'react';

export default function Ex01Titulo() {
  const [cliques, setCliques] = useState(0);

  useEffect(() => {
    document.title = `Cliques: ${cliques} | Laboratório React`;

    return () => {
      document.title = 'Laboratório React';
    };
  }, [cliques]);

  function adicionarClique() {
    setCliques((anterior) => anterior + 1);
  }

  function zerarContador() {
    setCliques(0);
  }

  return (
    <section className="panel">
      <span className="eyebrow">Exercício 01 · useEffect</span>

      <h1>Contador de cliques</h1>

      <p>
        Clique no botão e observe o título da aba do navegador.
      </p>

      <p className="metric">{cliques} clique(s)</p>

      <button onClick={adicionarClique}>
        Adicionar clique
      </button>

      {' '}

      <button onClick={zerarContador}>
        Zerar contador
      </button>
    </section>
  );
}
