import app from "./app";
import config from '../config/config.json';
const port:number = config.port;

app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening ${port}`);
});