const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'a1b2c3d4',
    database: 'lista-de-tarefas',
    port: '5432'
})

const getTarefas = async (req, res) => {
    const query = "SELECT * FROM tarefas";
    const response = await pool.query(query);
    res.send(response);
}

module.exports = {
    getTarefas
}