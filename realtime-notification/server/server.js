import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: 'http://localhost:3000'
  }
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.find((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

const deleteUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};

io.on('connection', (socket) => {
  socket.on('newUser', (username) => {
    addNewUser(username, socket.id);
  });
  console.log(onlineUsers);

  socket.on('sendNotification', ({ senderName, receiverName, type }) => {
    const receiver = getUser(receiverName).socketId;

    if (receiver) {
      io.to(receiver).emit('getNotification', { senderName, type });
    }
  });

  socket.on('disconnect', (test) => {
    deleteUser(socket.id);
  });
});

io.listen(4000);
