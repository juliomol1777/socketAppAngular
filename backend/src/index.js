const express = require('express');
const app = express();
const server = require('http').Server(app);

const path = require('path');
const mongoose = require('mongoose');

//iniciar servidor
server.listen(3000, () =>{
    console.log('server on port 3000')
})
    
// archivos estaticos
app.use('/public', express.static(path.resolve('public')));

//socket
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"]
    }
  });
require('./socket')(io);

//base de datos
mongoose.connect('mongodb://localhost/chats-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(db => console.log('db esta conectada'))
    .catch(err => console.log(err));



