import { Server } from "socket.io";
import someNamespace from "./namespace/some-snippets.namespace";

export default function registerNamespaces(io: Server){
    someNamespace(io);
}