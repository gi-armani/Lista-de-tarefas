import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TarefasItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.tarefa.completed ? 'line-through' : 'none'
        }
    }

  render() {
    return(
        <div style={this.getStyle()} >
            <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.tarefa.id)} /> {' '}
                { this.props.tarefa.title }
            </p>
        </div>
    );
  }
}

//PropTypes
TarefasItem.propTypes = {
    tarefa: PropTypes.object.isRequired
}

export default TarefasItem;
