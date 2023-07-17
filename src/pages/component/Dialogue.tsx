import React from "react";
import { ChatBotIcon, UserBotIcon } from "../../config/contants";
import { DialogueProps } from "../../type";
const Dialogue: React.FC<DialogueProps> = (props) => {
  const { content, isChat } = props.message;
  return (
    <div
      className={[
        "flex",
        isChat ? "justify-start" : "justify-end",
        isChat ? "mr-8" : "ml-8",
        "mt-3",
        "items-center",
      ].join(" ")}
    >
      {isChat ? (
        <div className="flex items-center justify-center max-w-prose">
          <img
            alt="profile picture"
            src={ChatBotIcon}
            decoding="async"
            className="max-w-[50px] sm:w-[42px] w-[30px]"
          />
          <div
            className=" bg-white overflow-auto max-w-prose rounded-lg py-3 px-4 ml-3 text-black"
            style={{
              boxShadow: "5px 5px 20px 0px rgba(181, 181, 181, 0.3)",
              borderRadius: "0px 10px 10px 10px",
            }}
          >
            <div className="flex flex-col items-start gap-4 break-words">
              <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                <span>{content}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center  max-w-prose  ">
          <div
            className="text-white bg-black overflow-auto max-w-prose rounded-lg py-3 px-4 mr-3"
            style={{
              boxShadow: "5px 5px 20px 0px rgba(55, 118, 244, 0.3)",
              borderRadius: "10px 0px 10px 10px",
            }}
          >
            <div className="flex flex-col items-start gap-4 break-words">
              <div className="prose text-inherit text-left w-full break-words dark:prose-invert ">
                <span>{content}</span>
              </div>
            </div>
          </div>
          <img
            alt="profile picture"
            src={UserBotIcon}
            decoding="async"
            className="max-w-[50px] sm:w-[42px] w-[30px]"
          />
        </div>
      )}
    </div>
  );
};

export default Dialogue;
