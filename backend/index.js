import express from 'express';
import http from 'http'; 
import { Server } from 'socket.io';

import AddFriend from './src/io/routes/AddFriend.js';

const app = express(); 
const server = http.createServer(app); 
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173'
  }
}); 




// Setup Socket.io routes 
AddFriend(io); 




const port = process.env.PORT || 3000; 

io.on('connection', (socket)=>{
  console.log(`A user has connected with the Id: ${socket.id}`)
  socket.on('disconnect', ()=>{
    console.log(`User: ${socket.id} has disconnected ending the session at ${new Date()}`); 
  })
})

server.listen(port, ()=>console.log(`Server is runnning on http://localhost:${port}`)); 