const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 3000;
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket)=>{
console.log('A User is connected ')

socket.on('join', ({ name, room },callback)=>{
// console.log(name,room)
// const error = true
const {error, user}= addUser({id:socket.id,name,room})

if(error) return callback(error);

socket.emit('message',{user:'admin',text:`${user.name},Welcome to room${user.room}`})
socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined.`})
socket.join(user.room)
callback()
})

socket.on('sendMessage', (message,callback)=>{
const user = getUser(socket.id)
io.to(user.room).emit('message',{user: user.name,text:message})

callback()
})

socket.on('disconnect', () => {
    console.log('user disconnected');
    
  });
})

app.use(router);
server.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
