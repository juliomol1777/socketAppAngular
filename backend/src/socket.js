"use strict"
const Document = require('./modelos/Document');

module.exports = function (io) {

    
    //socket.io
    //io.emit es para todos, socket.emit no
    io.on('connection', async socket => {

      //base de datos
      var documents = await Document.find({});
      socket.emit('old message', documents);
      
      /** handshake: Es el id de conexion con el dispositivo cliente */
      const id_handshake = socket.id;
      console.log('Nuevo dispositivo conectado: ' + id_handshake);

      //escuchar
      socket.on('send message', async data => {
        console.log(data)
        var user = data.user;
        var msg = data.text.trim();
        var nuevoMsg = new Document({
          user,
          msg
        });
        await nuevoMsg.save(); 
        console.log('nuevo mensaje' + nuevoMsg)
        io.emit('text event', nuevoMsg);
        //socket.broadcast.emit('text event', nuevoMsg)
      })
      //io.emit("documents", Object.keys(documents));
    });
}