const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//Middlewars
app.use(express.json()); //permite receber dados do cliente em fortato json
app.use(express.urlencoded({extended: false})); //recebe dados por fomularios

//Rotas
app.use(require('./routes/routes'));

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})