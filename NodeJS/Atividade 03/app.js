const express = require('express');

const app = express();

app.get('/',(Request, Response)=>{
    Response.send('Esse é um simples Node'
    + ' App Rodando no servidor')
});
app.post('/',(Request, Response)=>{

});

app.put('/',(Request, Response)=>{

});

app.delete('/',(Request, Response)=>{

});


const PORT = process.env.PORT||5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));