import { useState } from 'react'
import './App.css';
import Adicionar from './Components/Adicionar';
import Listar from './Components/Listar';
import { createContext } from 'react';

export const Context = createContext({});

function App() {
  let post = [{
    id: 0, 'titulo': 'Primeira postagem', "texto": "Oi eu sou um post", 'curtida': 3
  }]

  const [dados, setDados] = useState(post);

  return (
    <div className="App">
      <header className="App-header">
        <Context.Provider value={[dados, setDados]}>
          <Adicionar />
          <Listar />
        </Context.Provider>
      </header>
    </div>
  );
}

export default App;

