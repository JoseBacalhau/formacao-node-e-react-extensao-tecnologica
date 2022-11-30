// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (Request, Response) => {
    Response.send('A simple Node App is '
    + 'running on this server')
    Response.end()
})

// Port Number
const PORT = process.env.PORT||5000

// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));