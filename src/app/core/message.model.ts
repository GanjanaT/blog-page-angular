import { v4 as uuidv4 } from "uuid";

export interface IMessage {
    id: string;
    date: string;
    message: string;
    username: string;
}

export class Message implements IMessage{
    id: string;
    date: string;
    message: string;
    username: string;

    constructor(message: string, username: string){
        this.id = uuidv4();
        this.date = new Date().toLocaleString();
        this.message = message;
        this.username = username;
    }


}