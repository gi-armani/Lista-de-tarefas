import { Component } from 'react';
import './App.css';
import Tarefas from './components/Tarefas';

class App extends Component {

  state = {
    tarefas: [
      {
        id: 1,
        title: 'Fazer curso de React',
        completed: false
      },
      {
        id: 2,
        title: 'Preparar aulas de Arduino',
        completed: false
      },
      {
        id: 3,
        title: 'Passar aspirador de pó',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState( {tarefas: this.state.tarefas.map(tarefa => {
      if(tarefa.id === id) {
        tarefa.completed = !tarefa.completed
      }
      return tarefa;
    })} )
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Tarefas tarefas={this.state.tarefas} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
