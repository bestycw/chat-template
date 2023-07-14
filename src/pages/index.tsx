import React, { useMemo, useRef, useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Message } from "../type/index";
import { getLocalStorageJson } from "../utils";
import Dialogue from "./component/Dialogue";

const storageKey = "your_storage";
const historyMessage: never[] = [];
const ChatMain: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>({
    content: "Hi~~~~~~~~~~~~~~~",
    role: "chatbot",
    isChat: true,
  });
  const { content } = message;
  const messageBodyRef = useRef<HTMLDivElement>(null);
  const messageList = useMemo(() => {
    return [...historyMessage, message];
  }, [content]);
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
        <div className="flex-grow pl-[16px]  pr-[16px]" ref={messageBodyRef}>
          {messageList.map((item) => {
            return <Dialogue message={item} />;
          })}
        </div>
        <Footer loading={loading} />

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
