import React from "react";


const Footer: React.FC = () => {


    return (
        <div className=" sticky bottom-0 px-4 !bg-white">
            <div className={`py-2 flex justify-start`}>{ }</div>
            <div
                className="flex  p-2 rounded-[16px] items-center justify-between bg-[#F4F4F4]"
                style={{ border: "1px solid #e4e4e7" }}
            >
                {/* <div className="flex items-center w-11/12">
                    <textarea
                        aria-label="chat input"
                        required=""
                        maxLength="1250"
                        placeholder="Type a message here"
                        onKeyDown={(e) => {
                            if (e.keyCode === 13 && !e.shiftKey) {
                                e.preventDefault();
                                if (!isRequestRef.current) {
                                    settingChatLog();
                                    setChatContent("");
                                    window.reportGAEvent("sendMessage", "click", pathRes[1]);
                                }
                            }

                            if (e.keyCode === 13 && e.shiftKey) {
                                e.preventDefault();
                                setChatContent(e.target.value + "\n");
                            }
                        }}
                        rows="1"
                        className=" m-0  min-h-[60px] max-h-36 pr-2 resize-none border-0 bg-inherit flex-1 appearance-none rounded-md focus:ring-0 focus-visible:ring-0 focus:outline-none "
                        value={chatContent}
                        onChange={(e) => {
                            setChatContent(e.target.value);
                        }}
                    ></textarea>
                </div>
                <div
                    className="flex w-[40px] h-[40px] rounded-[20px] item-center"
                    style={{ backgroundColor: BgColorStore[TheThemeColor] }}
                >
                    <button
                        type="submit"
                        className="flex-none pl-[8px] pt-[3px]"
                        disabled={isRequestRef.current}
                        onClick={() => {
                            settingChatLog();
                            setChatContent("");
                            window.reportGAEvent("sendMessage", "click", pathRes[1]);
                        }}
                    >

                    </button>
                </div> */}
            </div>
            <div></div>
            {/* <p className="text-center text-xs py-2 " style={{ color: "#3f3f46" }}>
                Powered By &nbsp;
                <a
                    target="_blank"
                    className="font-semibold"
                    style={{ color: "#141410" }}
                    href="https://www.chatbrill.com"
                >
                    ChatBrill.com
                </a>
            </p> */}
        </div>
    )
}

export default Footer