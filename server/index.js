const express = require('express');
const cors = require('cors');
const router = require('./router');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app.callback());
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected'); // eslint-disable-line no-console

});

app.use(cors());
app.use((req,res, next) => {
  req.io = io;
  next();
})
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server running on port 3000 🚀')
})