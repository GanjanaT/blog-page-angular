import { v4 as uuidv4 } from "uuid";

export interface IBlogPost{
    id: string;
    title: string;
    content: string;
    name: string;
    email: string;
    date: string;
}

export class BlogPost implements IBlogPost{
    id: string;
    title: string;
    content: string;
    name: string;
    email: string;
    date: string;

    constructor(title: string, content: string, name: string, email: string){
        this.id = uuidv4();
        this.title = title;
        this.content = content;
        this.name = name;
        this.email = email;
        this.date = new Date().toLocaleDateString();
    }

}