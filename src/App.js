import { useState } from 'react'
import './App.css';
import Adicionar from './Components/Adicionar';
import Listar from './Components/Listar';
import { createContext } from 'react';

export const Context = createContext({});

function App() {

  const [dados, setDados] = useState(Blog);

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

export class Blog{
  constructor(id,name) {
    this.id = id;
    this.name = name;
  }
}