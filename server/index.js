const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const router = require('./router');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

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