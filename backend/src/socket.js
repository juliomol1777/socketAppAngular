"use strict"
const Document = require('./modelos/Document');

module.exports = function (io) {

    
    //socket.io
    //io.emit es para todos, socket.emit no
    io.on('connection', async socket => {
      //base de datos
      var documents = await Document.find({});
      socket.emit('text event', documents);
      //var documents = [];
      /** handshake: Es el id de conexion con el dispositivo cliente */
      const id_handshake = socket.id;
      console.log('Nuevo dispositivo conectado: ' + id_handshake);
      //escuchar
      socket.on('send message', async data => {
        console.log(data)
        var msg = data.msg.trim();
        var nuevoMsg = new Document({
          msg
        });
        await nuevoMsg.save();
        console.log(nuevoMsg)
        //documents.push(data)
        io.sockets.emit('text event', {msg});
        
        //socket.broadcast.emit('text event', documents)
      });

      // al dispositivo unico le emitimos un mensaje
      //socket.emit('mensaje-coneccion', {
        //msg: `Hola tu eres el dispositivo ${id_handshake}`
      //});
      //io.emit("documents", Object.keys(documents));
    });
}