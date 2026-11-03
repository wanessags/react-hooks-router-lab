# Aula prática — React Router, Context API, useEffect e Custom Hooks

Projeto didático com **5 exercícios curtos**, construído com **React (JSX) + Vite + React Router**. Cada tela corresponde a uma rota, e todos os trechos importantes do código estão comentados em português.

## Como executar

Requisitos: Node.js compatível com Vite 7 (Node 20.19+ ou 22.12+).

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Sequência didática

| # | Rota | Conceito | Resultado |
|---|---|---|---|
| 1 | `/exercicio-1` | `useEffect` + dependências | título da aba acompanha cliques |
| 2 | `/exercicio-2` | `useEffect` + cleanup | largura da janela em tempo real |
| 3 | `/exercicio-3` | `createContext` / `useContext` | tema claro/escuro global |
| 4 | `/exercicio-4` | `useCounter` | mesma lógica, dois estados independentes |
| 5 | `/exercicio-5` | `useLocalStorage` + Context | favoritos persistentes |

## Organização

```
src/
  main.jsx              # BrowserRouter + ThemeProvider
  App.jsx               # Menu NavLink + Routes
  styles.css            # Estilos de todas as páginas
  context/
    ThemeContext.jsx    # Contexto e Provider
  hooks/
    useCounter.js        # Custom hook sem efeito
    useLocalStorage.js   # Custom hook com efeito
  pages/
    Home.jsx
    Ex01Titulo.jsx
    Ex02Resize.jsx
    Ex03Context.jsx
    Ex04Counter.jsx
    Ex05Favoritos.jsx
```

## Desafios para os estudantes

1. **Título da aba:** criar um botão para zerar cliques. Explicar `[cliques]` e o retorno de cleanup.
2. **Largura:** adicionar a altura da janela. Explicar `addEventListener` e `removeEventListener`.
3. **Tema global:** adicionar o tema `azul` e atualizar as classes CSS. Explicar por que o estado persiste ao navegar, mas não após atualizar o navegador.
4. **Contador reutilizável:** adicionar `somarCinco()` ao custom hook. Explicar por que os dois contadores não compartilham o estado.
5. **Favoritos:** criar um botão para limpar favoritos. Explicar a diferença entre `useState` e `localStorage`.

## Perguntas para discussão

- Quando um efeito é necessário? O que são dependências?
- O que acontece com o listener se o usuário sair da página?
- Qual a diferença entre passar props e disponibilizar um contexto?
- Dois componentes que usam o mesmo custom hook compartilham o estado?
- Qual a diferença entre salvar algo em Context e em `localStorage`?
- Por que React Router não precisa recarregar a página ao mudar de rota?

## Documentação oficial

- https://react.dev/reference/react/useEffect
- https://react.dev/reference/react/createContext
- https://react.dev/reference/react/useContext
- https://react.dev/learn/reusing-logic-with-custom-hooks
- https://reactrouter.com/start/declarative/installation

> Observação: em modo de desenvolvimento, o StrictMode pode executar setup/cleanup de efeitos mais de uma vez para verificar se a lógica de limpeza está correta. Isso é esperado.
