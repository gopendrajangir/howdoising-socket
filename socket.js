const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: [
        'https://howdoising.herokuapp.com',
        'https://gopendrajangir.github.io/howdoising/',
      ],
    },
  });

  global.io = io;

  io.on('connection', (socket) => {
    console.log('Connected');
    socket.on('new_post', (data) => {
      console.log('Data', data);
      console.log('New Post');
      io.emit('new_post');
    });
    socket.on('join', (_id) => {
      socket.join(_id);
    });
    socket.on('leave', (_id) => {
      socket.leave(_id);
    });
    socket.on('notify', (_id) => {
      io.to(_id).emit('notification');
    });
  });
};
