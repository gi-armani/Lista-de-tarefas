import React, { Component } from 'react';

class AdicionaTarefa extends Component {
    render() {
        return(
            <form style={{display: 'flex'}}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Adicionar tarefa...' 
                    style={{flex: '10', padding: '5px'}}
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