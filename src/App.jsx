
import { NavLink, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';

function PaginaEmConstrucao({ titulo }) {
  return (
    <section className="panel">
      <span className="eyebrow">Em desenvolvimento</span>
      <h1>{titulo}</h1>
      <p>Este exercício será implementado nas próximas etapas.</p>
    </section>
  );
}

const paginas = [
  { caminho: '/', rotulo: 'Início' },
  { caminho: '/exercicio-1', rotulo: '01 · useEffect' },
  { caminho: '/exercicio-2', rotulo: '02 · Resize' },
  { caminho: '/exercicio-3', rotulo: '03 · Context API' },
  { caminho: '/exercicio-4', rotulo: '04 · Custom Hook' },
  { caminho: '/exercicio-5', rotulo: '05 · Favoritos' },
];

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>⚛ Laboratório React</h2>
        <p>Hooks, Context API e Router</p>

        <nav>
          {paginas.map((pagina) => (
            <NavLink
              key={pagina.caminho}
              to={pagina.caminho}
              end
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {pagina.rotulo}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />

          {paginas.slice(1).map((pagina) => (
            <Route
              key={pagina.caminho}
              path={pagina.caminho}
              element={
                <PaginaEmConstrucao titulo={pagina.rotulo} />
              }
            />
          ))}

          <Route
            path="*"
            element={<h1>Página não encontrada</h1>}
          />
        </Routes>
      </main>
    </div>
  );
}
