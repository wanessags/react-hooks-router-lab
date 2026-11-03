
import { useContext } from 'react';
import { NavLink, Routes, Route } from 'react-router';

import { ThemeContext } from './context/ThemeContext.jsx';

import Home from './pages/Home.jsx';
import Ex01Titulo from './pages/Ex01Titulo.jsx';
import Ex02Resize from './pages/Ex02Resize.jsx';
import Ex03Context from './pages/Ex03Context.jsx';
import Ex04Counter from './pages/Ex04Counter.jsx';

const paginas = [
  { caminho: '/', rotulo: 'Início' },
  { caminho: '/exercicio-1', rotulo: '01 · Effect: título' },
  { caminho: '/exercicio-2', rotulo: '02 · Effect: resize' },
  { caminho: '/exercicio-3', rotulo: '03 · Context API' },
  { caminho: '/exercicio-4', rotulo: '04 · Custom Hook' },
  { caminho: '/exercicio-5', rotulo: '05 · Integração' },
];

function PaginaEmConstrucao({ titulo }) {
  return (
    <section className="panel">
      <span className="eyebrow">Em desenvolvimento</span>
      <h1>{titulo}</h1>
      <p>Este exercício será implementado em breve.</p>
    </section>
  );
}

export default function App() {
  const { tema } = useContext(ThemeContext);

  const classeTema =
    tema === 'escuro' ? 'dark' :
    tema === 'azul' ? 'blue' : '';

  return (
    <div className={`layout ${classeTema}`}>
      <aside className="sidebar">
        <div className="brand">
          ⚛ Laboratório React
        </div>

        <p>5 exercícios demonstrativos</p>

        <nav aria-label="Exercícios">
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
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/exercicio-1"
            element={<Ex01Titulo />}
          />

          <Route
            path="/exercicio-2"
            element={<Ex02Resize />}
          />

          <Route
            path="/exercicio-3"
            element={<Ex03Context />}
          />

          <Route
            path="/exercicio-4"
            element={<Ex04Counter />}
          />

          <Route
            path="/exercicio-5"
            element={
              <PaginaEmConstrucao
                titulo="05 · Integração"
              />
            }
          />

          <Route
            path="*"
            element={
              <section className="panel">
                <h1>Página não encontrada</h1>
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
