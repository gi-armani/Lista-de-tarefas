import React, {useState} from 'react';
import axios from 'axios';

function AdicionaTarefa() {

    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");

    const adicionaTarefa = () => {
        axios.post("http://localhost:3001/adiciona", {
            nome: nome, 
            categoria:categoria
        }).then(() => {
            console.log("sucesso");
        });
    }

    return(
        <form onSubmit={adicionaTarefa} style={{display: 'flex'}}>
            <input 
                type='text'  
                placeholder='Adicionar tarefa...' 
                style={{flex: '10', padding: '5px'}}
                onChange = {(event) => {
                    setNome(event.target.value);
                }}
            />
            <input 
                type='text'  
                placeholder='Especifique a categoria...' 
                style={{flex: '10', padding: '5px'}}
                onChange = {(event) => {
                    setCategoria(event.target.value);
                }}
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

export default AdicionaTarefa