import React, { Component } from 'react';

class AdicionaTarefa extends Component {

    state = {
        title: ''
    }

    onFillForm = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.adicionaTarefa(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return(
            <form onSubmit={this.onSubmitForm} style={{display: 'flex'}}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Adicionar tarefa...' 
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onFillForm}
                />
                <input 
                    type='submit'
                    value='submit'
                    className='botao'
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AdicionaTarefa