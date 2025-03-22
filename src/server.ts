import app from "./app"; // API app
import config from '../config/config.json';
const port:number = config.port;

import http from "http";
import { Server } from "socket.io";
import registerNamespaces from "./ws/index";

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

registerNamespaces(io);

server.listen(port, '0.0.0.0', ()=>{
    console.log(`listening ${port}`);
});