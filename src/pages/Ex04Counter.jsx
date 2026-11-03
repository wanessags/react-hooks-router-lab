
import { useCounter } from '../hooks/useCounter.js';

function Contador({ titulo, valorInicial }) {
  const {
    contador,
    aumentar,
    diminuir,
    somarCinco,
    zerar,
  } = useCounter(valorInicial);

  return (
    <div className="subpanel">
      <h2>{titulo}</h2>

      <p className="metric">{contador}</p>

      <div className="actions">
        <button onClick={diminuir}>
          − 1
        </button>

        <button onClick={aumentar}>
          + 1
        </button>

        <button onClick={somarCinco}>
          + 5
        </button>

        <button className="secondary" onClick={zerar}>
          Restaurar
        </button>
      </div>
    </div>
  );
}

export default function Ex04Counter() {
  return (
    <section className="panel">
      <span className="eyebrow">
        Exercício 04 · Custom Hook
      </span>

      <h1>Dois contadores, uma lógica reutilizável</h1>

      <p>
        Os controles funcionam separadamente,
        mesmo utilizando o mesmo Hook Customizado.
      </p>

      <div className="cards">
        <Contador
          titulo="Contador A"
          valorInicial={0}
        />

        <Contador
          titulo="Contador B"
          valorInicial={10}
        />
      </div>

      <p className="muted">
        Desafio concluído: botão para somar 5
        em cada contador.
      </p>
    </section>
  );
}
