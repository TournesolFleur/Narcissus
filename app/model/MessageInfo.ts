import { IMessageInfo } from "./IMessageInfo";
import { MessageRole } from "./MessageRole";

export class MessageInfo implements IMessageInfo{
    constructor(public content:string
                ,public role:MessageRole=MessageRole.user) {  }
  }