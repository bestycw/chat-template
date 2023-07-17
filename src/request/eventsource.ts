import { fetchEventSource } from "@microsoft/fetch-event-source";
import { EventSourceMessage } from "@microsoft/fetch-event-source/lib/cjs/parse";
import { reqBaseConfig } from "../type";
import { bodyString } from "../utils";
/**
 * EventSource方式
 * 1.使用@microsoft/fetch-event-source能够发送post请求，默认只能发送get
 * 2.增加timeout
 *
 */
const DefaultHeaders = {
  "Content-Type": "application/json",
};

export default class EventSource {
  // 请求控制器
  abort: AbortController;
  //超时定时器
  timer: any;
  timeout: number;
  onmessage: ((e: EventSourceMessage) => void) | undefined;
  onerror: ((e: any) => void | number | null | undefined) | undefined;
  config: any;
  headers: any;
  Url: string;
  isRetry: boolean;
  onclose: (() => void) | undefined;
  onopen: ((response: Response) => void) | undefined;
  status: string;
  constructor(baseConfig: reqBaseConfig) {
    const { timeout = 10000, isRetry = false, baseUrl = "" } = baseConfig;
    this.headers = { ...DefaultHeaders };
    this.isRetry = isRetry;
    this.Url = baseUrl;
    this.abort = new AbortController();
    this.timer = null;
    this.timeout = timeout;
    this.onmessage = undefined;
    this.onerror = undefined;
    this.onclose = undefined;
    this.onopen = function (e) {};
    this.status = "ready";
  }

  //   从请求发出后，到收到响应的时间
  _timeoutControl() {
    new Promise((resolve, reject) => {
      this.timer = setTimeout(() => {
        reject("连接超时");
        this.abort.abort();
      }, this.timeout);
    });
  }
  post(url: string, params: RequestInit) {
    let { headers = {}, method, body } = params;
    if (!this.onmessage) console.warn("please set onmessage callbak");
    this._timeoutControl();

    fetchEventSource(this.Url + url, {
      method: "post",
      headers: { ...this.headers, ...headers },
      signal: this.abort.signal,
      body: body,
      onmessage: this.onmessage,
      onerror: (error) => {
        clearTimeout(this.timer);
        if (this.isRetry) {
        } else {
          this.abort.abort();
        }
        this.onerror!(error);
      },
      onclose: this.onclose,
      onopen: (e) => {
        clearTimeout(this.timer);
        if (e.ok) {
          this.onopen!(e);
          return new Promise((resolve) => {
            resolve();
          });
        } else {
          return new Promise((reject) => {
            reject();
          });
        }
      },
    });
  }

  get() {
    new Error("暂时不支持GET方法");
  }
}
