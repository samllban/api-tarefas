const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const tarefasRouter = require('./routes/tarefas');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/tarefas', tarefasRouter);

app.use(express.urlencoded({ extended: true }));


sequelize.sync()
    .then(() => {
        console.log('banco de dados sincronizados');
        app.listen(port, () => {
            console.log(`Servidor rodando na porta <http://localhost>${port}`)
        });
    })
    .catch(err => console.error('Error ao sincronizar banco de dados:', err));
