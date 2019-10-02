const express = require('express');
const routes = require('./routes');

const app = express();

//req.query  =  acessar query params - para filtros
//req.params = acessar route params -  para edição e delete
//req.body = acassar corpo da requisição - para criação e edição

app.use(express.json());
app.use(routes);


app.listen(3001);