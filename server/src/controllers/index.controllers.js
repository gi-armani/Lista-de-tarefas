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
    res.status(200).json(response.rows);
}

const createTarefas = async (req, res) => {
    let nome = req.body.nome;
    let categoria = req.body.categoria;

    //const query = "INSERT INTO tarefas (id, nome, categoria) VALUES (2, 'Estudar banco de dados', 'Graduação');";
    const query = "INSERT INTO tarefas (nome, categoria) VALUES ('" + nome + "', '" + categoria + "')";
    const response = await pool.query(query, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
            console.log("Show")
        }
    });
    //res.status(200).json(response.rows);
}

module.exports = {
    getTarefas,
    createTarefas
}