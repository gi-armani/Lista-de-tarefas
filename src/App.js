import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import AdicionaTarefa from './components/AdicionaTarefa';
import Tarefas from './components/Tarefas';
import {v4 as uuid} from 'uuid';

class App extends Component {

  state = {
    tarefas: [
      {
        id: uuid(),
        title: 'Fazer curso de React',
        completed: false
      },
      {
        id: uuid(),
        title: 'Preparar aulas de Arduino',
        completed: false
      },
      {
        id: uuid(),
        title: 'Passar aspirador de pó',
        completed: false
      }
    ]
  }

  //Marcar tarefa como completa (risca ela na lista)
  markComplete = (id) => {
    this.setState( {tarefas: this.state.tarefas.map(tarefa => {
      if(tarefa.id === id) {
        tarefa.completed = !tarefa.completed
      }
      return tarefa;
    })} )
  }

  //Deletar tarefa
  delTarefa = (id) => {
    this.setState({tarefas: [...this.state.tarefas.filter(tarefa => tarefa.id !== id)]});
  }

  adicionaTarefa = (title) => {
    const novaTarefa = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ tarefas: [...this.state.tarefas, novaTarefa] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AdicionaTarefa adicionaTarefa={this.adicionaTarefa} />
        <Tarefas tarefas={this.state.tarefas} markComplete={this.markComplete} delTarefa={this.delTarefa} />
        </div>
      </div>
    );
  }
}

export default App;
