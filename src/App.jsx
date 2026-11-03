
import { NavLink, Routes, Route } from 'react-router';

import Home from './pages/Home.jsx';
import Ex01Titulo from './pages/Ex01Titulo.jsx';

// Componente temporário para exercícios ainda não implementados
function PaginaEmConstrucao({ titulo }) {
  return (
    <section className="panel">
      <span className="eyebrow">Em desenvolvimento</span>
      <h1>{titulo}</h1>
      <p>
        Este exercício será implementado nas próximas etapas.
      </p>
    </section>
  );
}

// Páginas disponíveis no menu
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

      {/* Menu lateral */}
      <aside className="sidebar">
        <h2>⚛ Laboratório React</h2>
        <p>Hooks, Context API e Router</p>

        <nav aria-label="Navegação dos exercícios">
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

      {/* Conteúdo principal */}
      <main className="content">
        <Routes>

          {/* Página inicial */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Exercício 01 - useEffect */}
          <Route
            path="/exercicio-1"
            element={<Ex01Titulo />}
          />

          {/* Exercícios que serão implementados depois */}
          {paginas.slice(2).map((pagina) => (
            <Route
              key={pagina.caminho}
              path={pagina.caminho}
              element={
                <PaginaEmConstrucao titulo={pagina.rotulo} />
              }
            />
          ))}

          {/* Rota para páginas inexistentes */}
          <Route
            path="*"
            element={
              <section className="panel">
                <h1>Página não encontrada</h1>
                <p>
                  A página que você tentou acessar não existe.
                </p>
              </section>
            }
          />

        </Routes>
      </main>
    </div>
  );
}
