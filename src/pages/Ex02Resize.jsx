
import { useEffect, useState } from 'react';

export default function Ex02Resize() {
  const [dimensoes, setDimensoes] = useState({
    largura: window.innerWidth,
    altura: window.innerHeight,
  });

  useEffect(() => {
    function atualizarDimensoes() {
      setDimensoes({
        largura: window.innerWidth,
        altura: window.innerHeight,
      });
    }

    window.addEventListener('resize', atualizarDimensoes);

    return () => {
      window.removeEventListener('resize', atualizarDimensoes);
    };
  }, []);

  return (
    <section className="panel">
      <span className="eyebrow">
        Exercício 02 · useEffect + Cleanup
      </span>

      <h1>Monitor de tamanho da janela</h1>

      <p>
        Redimensione a janela do navegador e acompanhe
        as dimensões em tempo real.
      </p>

      <div className="cards">
        <div className="subpanel">
          <h2>Largura</h2>
          <p className="metric">{dimensoes.largura} px</p>
        </div>

        <div className="subpanel">
          <h2>Altura</h2>
          <p className="metric">{dimensoes.altura} px</p>
        </div>
      </div>

      <p className="muted">
        {dimensoes.largura < 768
          ? '📱 Tela estreita'
          : '🖥️ Tela larga'}
      </p>

      <p className="muted">
        O useEffect registra o evento resize e o cleanup
        remove esse evento quando o componente é desmontado.
      </p>
    </section>
  );
}
