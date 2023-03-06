import React from "react";
import "./IconButton.scss"

interface IconButtonProps{
    /**
     * 图标
     */
     icon:string,
     /**
      * 点击事件
      * @returns 
      */
     onClick:()=>void
}

 export const  IconButton = (props:IconButtonProps)=> <div  onClick={e=>props.onClick()} className="flex-center icon-button transition">
     <i className={props.icon + ' flex-center'}></i>
</div>
