// Requiring module
const { response } = require('express');
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (Request, Response) => {
    Response.send('Uma simples API Node está rodando no servidor') // Enviando essa String para ser exibida
    Response.end() //
})

// Rota Home
app.get('/home',(Request, Response) => {
    Response.send('Página Home')
    Response.end()
})

// Rota Contact
app.get('/contact',(Request, Response)=> {
    Response.send('Essa é a página onde ficaria o Contato')
    Response.end()
})

// Port Number
const PORT = process.env.PORT||5000

// Server Setup
app.listen(PORT,console.log(`Servidor iniciado na porta ${PORT}.`));