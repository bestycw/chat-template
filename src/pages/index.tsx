import React, { useMemo, useRef, useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Message } from "../type/index";
import { getLocalStorageJson } from "../utils";
import Dialogue from "./component/Dialogue";
import { fetchEventSource } from "../request";
import { EventSourceMessage } from "@microsoft/fetch-event-source";
import { WaitingDom } from "../config/contants";

const storageKey = "your_storage";
const historyMessage: Message[] = [
  {
    content: "Hi~~~~~~~~~~~~~~~",
    role: "chatbot",
    isChat: true,
  },
];
const historyStore = getLocalStorageJson(storageKey)
const ChatMain: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageStore, setMessageStore] = useState<{
    message: Message,
    history: Message[],
    status: string
  }>({
    message: {
      content: "Hi~~~~~~~~~~~~~~~",
      role: "chatbot",
      isChat: true,
    },
    history: [],
    status: "",

  });
  const { current: historyList } = useRef<Message[]>(historyMessage);
  const { message, history, status } = messageStore
  const { content } = message;
  const messageBodyRef = useRef<HTMLDivElement>(null);
  const messageList = useMemo(() => {
    return [
      ...history,
      {
        ...message
      }
    ]
  }, [content, status]);
  const requestMessage = (reqMessage: Message) => {
    setMessageStore((prev) => {
      const { message, history, status } = prev
      return {
        history: [...history, { ...message }],
        message: { ...reqMessage },
        status: "done"
      }

    });
    setLoading(!loading);
    const initContent: Message = {
      content: WaitingDom,
      role: "chatbot",
      isChat: true,
    };
    setMessageStore((prev) => {
      const { message, history, status } = prev
      return {
        history: [...history, { ...message }],
        message: { ...initContent },
        status: "done"
      }
    })
    let content = ""
    //请求设置
    fetchEventSource.onmessage = (e: EventSourceMessage) => {
      console.log(e.data);
      if (e.data === '[DONE]') {
        console.log("数据已接受完毕")
        setLoading(!!loading);
        setMessageStore((prev) => {
          const { message, history, status } = prev
          message.content = content
          return {
            history: [...history],
            message: { ...message },
            status: "done"
          }
        })
      } else {
        const data = JSON.parse(e.data);
        console.log("正在接受数据 ", data)
        if (data.sourceDocs) {
        } else if (data.data) {
          const result = data.data;
          content += result
          initContent.content = content
          setMessageStore((prev) => {
            const { message, history, status } = prev
            message.content = content
            return {
              history: [...history],
              message: { ...message },
              status: "processing"
            }
          })
        }
      }
    };
    fetchEventSource.onerror = (error: any) => {
      console.log(error);
    };
    // fetch("http://localhost:8080/chat", {
    //   method: "post"
    // })

    fetchEventSource.post("http://localhost:8080/chat", {
      body: JSON.stringify({
        inputType: "MESSAGE",
        inputValue: "what is time",
        chatbotid: "semsorfi",
        sessionid: "02d60930-d449-48ee-8eda-9c7abe20b98e",
        messages: [],
      }),
      headers: {},
    });
  };
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        className=" flex flex-col min-h-screen sm:text-[16px] text-[14px] leading-[1.75]"
      // style={{ background: "#000" }}
      >
        <Header />
        <div
          className="flex-grow pl-[16px] pr-[16px] h-[50vh] overflow-y-auto"
          ref={messageBodyRef}
        >
          {messageList.map((item) => {
            return <Dialogue message={item} />;
          })}
        </div>
        <Footer loading={loading} request={requestMessage} />

        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 z-20 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
