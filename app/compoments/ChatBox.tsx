import { Component, ReactNode } from "react";
import React from "react";
import {IconButton} from "./IconButton";
import "./ChatBox.scss"
export interface ChatBoxProps{
  /** 能否发送消息 */
  canSend:boolean,
  
  /** 发送消息 */
  onMessage:(text:string)=>void
}

export class ChatBox extends Component<ChatBoxProps>{
    
    textInput;

    constructor(props:ChatBoxProps){
        super(props);
        this.textInput= React.createRef<HTMLInputElement>();
    }
    
    inputKeyDownHandle=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter'){
             this.SendMessage();
        }
    }

    SendMessage=()=>{
       if(!this.props.canSend) return;
       const value=this.textInput.current!.value;
       if(!value||value.length<=0) return;
       this.props.onMessage(value);
       this.textInput.current!.value="";
    }

    render(): ReactNode {
        return <div className="chat-box transition">
           <input ref={this.textInput} type="text" onKeyDown={e=>this.inputKeyDownHandle(e)}  placeholder="请输入消息" className="transparent border-box" />
           <IconButton icon={this.props.canSend?"icon-send_28":"icon-dismiss_circle_32"}  onClick={this.SendMessage}></IconButton>
        </div>
    }
}