import { v4 as uuidv4 } from "uuid";

export interface IComments{
    id: string;
    pageComments: Comment[];
}

export class Comments implements IComments{
    id: string;
    pageComments: Comment[];

    constructor(id:string, pageComments: Comment[]){
        this.id = id;
        this.pageComments = pageComments;
    }
}

export interface IComment {
    id: string;
    name: string;
    comment: string;
    date: string;
}

export class Comment implements IComment{
    id: string;
    name: string;
    comment: string;
    date: string;

    constructor(name: string, comment: string){
        this.id = uuidv4();
        this.name = name;
        this.comment = comment;
        this.date = new Date().toLocaleDateString();
    }
}