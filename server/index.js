const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 3000;
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket)=>{
console.log('A User is connected ')
socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})

app.use(router);
server.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));
