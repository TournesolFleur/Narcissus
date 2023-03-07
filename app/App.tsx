import "./styles/style.scss"
import { ChatBox } from "./compoments"
import { Component, ReactNode } from "react"
import { IMessageInfo } from "./model/IMessageInfo";
import { ChatMessage } from "./compoments/ChatMessage";
import { MessageInfo } from "./model/MessageInfo";
import { MessageRole } from "./model/MessageRole";
import { DataRequest } from "./network";

interface AppState{
    Message:IMessageInfo[],
    think:boolean
}

export class App extends Component<{},AppState>{

    constructor(props:{}){
        super(props);
        this.state ={ Message:[],think:false};
        
    }

    sendMessage= async (text:string)=>{
      this.setState({think:true});
      const message= this.state.Message;
      message.push(new MessageInfo(text));
      const post= [...message];
      const data= new MessageInfo("",MessageRole.think);
      message.push(data);
      this.setState({        Message:message      });
      await DataRequest.Stream(post,()=>data.role=MessageRole.assistant, text=>{
        data.content+=text;
        this.setState({        Message:message      });
     });
     this.setState({think:false});
    }


    render(): ReactNode {
      return   <div className="main-container full border-box">
          <div className="message-container">
             {this.state.Message.map(s=> <ChatMessage key={s.id} role={s.role} content={s.content}></ChatMessage> )}
          </div>
          <ChatBox canSend={this.state.think}  onMessage={this.sendMessage}></ChatBox>
       </div>
    }   
}

