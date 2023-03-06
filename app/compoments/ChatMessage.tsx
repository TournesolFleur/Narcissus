import React from "react"
import { IMessageInfo } from "../model/IMessageInfo"
import { MessageRole } from "../model/MessageRole"
import { MarkdownActor } from "../utils"
import "./ChatMessage.scss"

/** 思考旋转 */
const ThinkRefresh=()=><div className="refresh flex-center">
     <i className="icon-arrow_clockwise_20 flex-center"></i>
</div>
/** 用户图标 */
const UserIcon= ({user=false}:{user:boolean})=> <div className={user?'user-icon user-icon-user':'user-icon'}></div>

/** 用户消息 */
const UserMessage= ({message}:{message:string})=> <>
    <UserIcon user={true}></UserIcon>
    <div className="flex-align">{message}</div>
</>

/** 思考消息 */
const ThinkMessage = ()=><>
   <UserIcon user={false}/>
   <div className="flex-center">
   <ThinkRefresh/>
   </div>
</>

/** 助手消息 */
const AssistantMessage = ({message}:{message:string})=><>
<UserIcon  user={false}/>
<div className="flex-one" dangerouslySetInnerHTML={MarkdownActor.html(message)}></div>
</>;

export const ChatMessage = ({role,content}:IMessageInfo)=><div className="chat-message transition flex">
     
     {role=== MessageRole.user ? <UserMessage  message={content} />
           : role === MessageRole.think ? <ThinkMessage />
           : <AssistantMessage  message={content}></AssistantMessage>}

</div>