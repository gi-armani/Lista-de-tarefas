import React, {Component} from 'react';
import TarefasItem from './TarefasItem';
import PropTypes from 'prop-types';

class Tarefas extends Component {

  render() {
    return this.props.tarefas.map((tarefa) => (
      //<h3>{ tarefa.title }</h3>
      <TarefasItem chave={tarefa.id} tarefa={tarefa} markComplete={this.props.markComplete} delTarefa={this.props.delTarefa} />
    ));
  }

}

//PropTypes
Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired
}

export default Tarefas;
