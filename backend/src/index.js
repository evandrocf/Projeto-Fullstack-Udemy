const express = require('express');
const cors = require('cors');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes.js');

server.use(express.json());
server.use(cors());
server.use('/task', TaskRoutes);



server.listen(6500, () => {
    console.log('API ONLINE');
});
