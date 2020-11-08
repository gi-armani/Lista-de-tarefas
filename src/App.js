import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import AdicionaTarefa from './components/AdicionaTarefa';
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

  delTarefa = (id) => {
    this.setState({tarefas: [...this.state.tarefas.filter(tarefa => tarefa.id !== id)]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AdicionaTarefa />
        <Tarefas tarefas={this.state.tarefas} markComplete={this.markComplete} delTarefa={this.delTarefa} />
        </div>
      </div>
    );
  }
}

export default App;
