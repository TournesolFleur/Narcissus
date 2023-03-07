import { IdGenerate } from "../utils";
import { IMessageInfo } from "./IMessageInfo";
import { MessageRole } from "./MessageRole";

export class MessageInfo implements IMessageInfo{

    public id:number;

    constructor(public content:string
                ,public role:MessageRole=MessageRole.user) { 
         this.id= IdGenerate.generate();
    }
  }