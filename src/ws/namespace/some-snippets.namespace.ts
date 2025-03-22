import { Server } from "socket.io";

type socketMsg = {
    message: string,
};

export default function someNamespace(io: Server){
    const chat = io.of("/chat");

    chat.on("connection", (socket)=>{
        console.log("[chat] user connected:", socket.id);

        socket.on("message", (msg)=>{
            messageEmitter(msg);
        });

        socket.on('disconnect', () => {
            console.log('[chat] user disconnected:', socket.id);
          });
    });

    const messageEmitter = (msg: string): any =>{
        let parsedMsg:socketMsg;
        try{
            parsedMsg = JSON.parse(msg)
        } catch (e){
            return console.error(e);
        }
        chat.emit("message", {parsed: parsedMsg});
    };
}