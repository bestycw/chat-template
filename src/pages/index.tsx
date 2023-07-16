import React, { useMemo, useRef, useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Message } from "../type/index";
import { getLocalStorageJson } from "../utils";
import Dialogue from "./component/Dialogue";
import { fetchEventSource } from "../request";
import { EventSourceMessage } from "@microsoft/fetch-event-source";
const storageKey = "your_storage";
const historyMessage: Message[] = [
  {
    content: "Hi~~~~~~~~~~~~~~~",
    role: "chatbot",
    isChat: true,
  },
];
const ChatMain: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>({});
  const { current: historyList } = useRef<Message[]>(historyMessage);
  const { content } = message;
  const messageBodyRef = useRef<HTMLDivElement>(null);
  const messageList = useMemo(() => {
    if (message.content) {
      historyList.push(message);
    }
    return [...historyList];
  }, [content]);
  const requestMessage = (message: Message) => {
    setMessage(message);
    setLoading(!loading);
    const initContent: Message = {
      content: "Waiting....",
      role: "chatbot",
      isChat: true,
      status: "waiting",
    };
    setMessage(initContent)
    //请求设置
    fetchEventSource.onmessage = (e: EventSourceMessage) => {
      console.log(e);
    };
    fetchEventSource.onerror = (error: any) => {
      console.log(error);
    };
    fetchEventSource.post("/api/chat", {
      body: JSON.stringify({
        inputType: "MESSAGE",
        inputValue: "what is time",
        chatbotid: 98,
        sessionid: "66a7eda0-01a6-4b84-94bd-7b8e2da2a645",
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
