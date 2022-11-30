const express = require('express');
const mysql = require('mysql2');
const connect = require('database/connect');

const app = express();

app.set('view engine', 'ejs');

app.get('/',(Request, Response)=>{
    Response.render('pages/index')
});

app.get('/about',(Request, Response)=>{
    Response.render('pages/index')
});

app.post('/',(Request, Response)=>{

});

app.put('/',(Request, Response)=>{

});

app.delete('/',(Request, Response)=>{

});


const PORT = 8080

app.listen(PORT,() => {console.log('App Rodando!')});