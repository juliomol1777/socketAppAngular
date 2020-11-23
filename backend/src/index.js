const e = require('express');
const express = require('express');
const socketIo = require('socket.io');
const path = require('path');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//iniciar servidor
const server = app.listen(app.get('port'), () =>{
    console.log('server on port' , app.get('port'));
});

// archivos estaticos
//app.use(express.static(path.join(_dirname, 'public')));

const io = socketIo(server);

require('./socket')(io);



