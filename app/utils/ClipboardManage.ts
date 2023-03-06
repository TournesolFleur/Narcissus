export module ClipboardManage{
    function CopyWidthArea(string:string){
      const area = document.createElement('textarea');
      try {
        area.value = string;
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
      }finally {
        area.remove();
      }
    }
  
    export async function  Copy(string:string){
      if(window.navigator.clipboard){
        await window.navigator.clipboard.writeText(string);
      }else{
        CopyWidthArea(string);
      }
    }
  }
  