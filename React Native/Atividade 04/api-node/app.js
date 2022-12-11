const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// OK
app.get('/clientes',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Acess-Control-Allow-Methods','GET,PUT,POST,DELETE');    
    return connect.execSQLQuery('select * from cliente', Response);
});

// OK
app.get('/clientes/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*"); // Qualquer host que acessar minha API vai ser permitido
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');// Vou permitir o método GET, PUT, POST DELETE
    return connect.execSQLQuery('select * from cliente where id='+ Request.params.id, Response);
});



app.put('/clientes/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update cliente set nome='"+Request.body.nome+"' where id="+Request.params.id, Response);
}); 

app.post('/clientes/',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*"); 
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into cliente (nome) value('"+Request.body.nome+"')", Response);
});

// OK
app.delete('/clientes/:id',(Request, Response)=>{
    Response.setHeader("Access-Control-Allow-Origin","*");
    Response.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from cliente where id="+ Request.params.id, Response);
});

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {console.log('App Rodando!')});