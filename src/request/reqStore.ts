import FetchRequest from "./fetch";
import EventSource from "./eventsource";
import WebSocketRequest from "./websocket";
import { reqBaseConfig } from "../type";

// 工厂模式
/**
 * 1.支持多种流式请求，也支持正常的文本请求
 * 2.提供超时检测
 * 3.可以选择不同的请求方式
 * 4.支持baseurl设置
 *
 */
/**
 * 1.通过参数创建请求方式，evetsource、fetch、ws
 * 2.可以设置请求头信息
 * 3.接收返回的信息
 */
interface ReqServiceInit {
  request: FetchRequest | EventSource | WebSocketRequest;
}

export default class requestService {
  request: EventSource | null;
  type: string;
  // onmessage: null | Function;
  // onopen: null;
  // onerror: null;
  // onclose: null;
  constructor(reqType = "eventsource", baseConfig: reqBaseConfig = {}) {
    this.request = null;
    this.type = reqType;
    // this.onmessage = null
    // this.onopen = null;
    // this.onclose = null;
    // this.onerror = null;
    switch (reqType) {
      case "eventsource":
        this.request = new EventSource(baseConfig);
        break;
      case "fetch":
        // this.request = new FetchRequest();
        break;
      case "websocket":
        // this.request = new WebSocketRequest();
        break;
      default:
        // this.request =
        console.log("error");
        break;
    }
  }

  public set onmessage(callback: any) {
    this.request!.onmessage = callback;
  }
  public set onerror(callback: any) {
    this.request!.onerror = callback;
  }
  public set onopen(callback: any) {
    this.request!.onopen = callback;
  }
  public set onclose(callback: any) {
    this.request!.onclose = callback;
  }
  post(url: string, params:RequestInit) {
    this.request?.post(url, params);
  }
}
