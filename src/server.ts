import app from "./app"; // API app
import config from './config/config';

import http from "http";
import { Server } from "socket.io";
import registerNamespaces from "./ws/ws";

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

registerNamespaces(io);

const port:number = config.port;
server.listen(port, "0.0.0.0", ()=>{
    console.log(`listening ${port}`);
});