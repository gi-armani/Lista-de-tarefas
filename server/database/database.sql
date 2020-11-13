CREATE DATABASE lista-de-tarefas;

CREATE TABLE tarefas(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    categoria VARCHAR(20),
    estaCompleta BOOLEAN,
    dataTermino DATE
);