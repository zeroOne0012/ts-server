import { Server } from "socket.io";
import chatNamespace from "./namespace/chat.namespace";

export default function registerNamespaces(io: Server){
    chatNamespace(io);
}