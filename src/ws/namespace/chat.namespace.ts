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
        try{ // json 메시지만 수신
            parsedMsg = JSON.parse(msg)
        } catch (e){
            return console.error(e);
        }
        chat.emit("message", JSON.stringify(parsedMsg));
    };
}