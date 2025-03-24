export default class HttpError extends Error{
    public statusCode: number = 500;
    public type: string = "Internal Server Error";

    constructor(statusCode:number, type:string, message:string) {
        super(message);
        this.statusCode = statusCode;
        this.type = type;
    }
}
// export default class HttpError extends Error{
//     private statusCode: number;
//     private type: string;

//     constructor(statusCode:number, type:string, message:string) {
//         super(message);
//         this.statusCode = statusCode;
//         this.type = type;

//         // Object.setPrototypeOf(this, HttpError.prototype);
//     }

//     public getStatusCode():number{
//         return this.statusCode;
//     }

//     public getType():string{
//         return this.type;
//     }
// }