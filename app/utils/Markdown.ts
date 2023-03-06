import MarkdownIt from "markdown-it";
import mdKatex from 'markdown-it-katex'
import mdHighlight from 'markdown-it-highlightjs'

export module MarkdownActor{

    const md=  MarkdownIt().use(mdKatex).use(mdHighlight);

    export function html(message:string|(()=>string)){
       const html= typeof message === "string" ? md.render(message):md.render(message()); 
       return {__html:html};
    }
}