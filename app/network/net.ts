import { IMessageInfo } from "../model/IMessageInfo";
import { Fetch, FetchReader } from "../utils";

export module DataRequest {

  export async function Stream(messages: IMessageInfo[], begin: () => void, func: (text: string) => void) {
    try {
      const message = JSON.stringify({ messages });
      const res = await Fetch.post("http://167.179.94.165:7200/api/Chat/Stream", message);
      begin();
      await FetchReader.ReadUnicode(res,func)
    } catch (e) {
      console.log(e)
    }
  }

}