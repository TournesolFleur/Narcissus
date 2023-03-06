export module FetchReader {
    export async function ReadUnicode(response: Response,func:(text:string)=>void) {
      const reader = response?.body?.getReader();
      if (!reader) return;
      const code=new TextDecoder('utf-8');
      while (true){
        const result = await reader.read();
        if (result.done) break;
        let text = code.decode(result.value);
        func(text);
      }
    }
  }
  