import './App.css';
import Adicionar from './Components/Adicionar';
import Listar from './Components/Listar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Adicionar />
        <Listar />
      </header>
    </div>
  );
}

export default App;
