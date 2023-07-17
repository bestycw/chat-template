import React, { useState } from "react";
import { SubmitIcon, PowerBy } from "../../config/contants";
import { Message } from "../../type";
interface Props {
  loading: boolean;
  request: any;
}
const Footer: React.FC<Props> = (props) => {
  const { loading, request } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const keyDown = (e: any) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if (!loading) {
        setInputValue("");
        submitMessage();
        // window.reportGAEvent("sendMessage", "click", pathRes[1]);
      }
    }
    if (e.keyCode === 13 && e.shiftKey) {
      e.preventDefault();
      setInputValue(e.target.value + "\n");
    }
  };

  const submitMessage = async () => {
    // console.log(inputValue);
    request({
      content: inputValue,
      role: "user",
      isChat: false,
    });
    setInputValue("");
  };

  return (
    <div className=" px-4 !bg-white">
      <div className={`py-2 flex justify-start`}>{}</div>
      <div
        className="flex  p-2 rounded-[16px] items-center justify-between bg-[#F4F4F4]"
        // style={{ border: "1px solid #e4e4e7" }}
      >
        <div className="flex items-center w-11/12">
          <textarea
            aria-label="chat input"
            disabled={loading}
            maxLength={1250}
            placeholder="Type a message here"
            onKeyDown={keyDown}
            rows={1}
            className=" m-0  min-h-[60px] max-h-36 pr-2 resize-none border-0 bg-inherit flex-1 appearance-none rounded-md focus:ring-0 focus-visible:ring-0 focus:outline-none "
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          ></textarea>
        </div>
        <div
          className="flex w-[40px] h-[40px] rounded-[20px] item-center"
          //   style={{ backgroundColor: BgColorStore[TheThemeColor] }}
        >
          <button
            type="submit"
            className="flex-none pl-[8px] pt-[3px]"
            disabled={loading}
            onClick={() => {
              submitMessage();
              //   settingChatLog();
              //   setChatContent("");
              //   window.reportGAEvent("sendMessage", "click", pathRes[1]);
            }}
          >
            {SubmitIcon}
          </button>
        </div>
      </div>
      <div></div>
      <p className="text-center text-xs py-2 " style={{ color: "#3f3f46" }}>
        Powered By &nbsp;
        <a
          target="_blank"
          className="font-semibold"
          style={{ color: "#141410" }}
          href={PowerBy.target}
          rel="noreferrer"
        >
          {PowerBy.name}
        </a>
      </p>
    </div>
  );
};

export default Footer;
