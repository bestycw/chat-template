import React from "react"
import Header from "./component/footer"
import Footer from "./component/footer"

const ChatMain: React.FC = (props) => {
    return (
        <div style={{
            width: "100%",
        }}>
            <div
                className=" flex flex-col min-h-screen sm:text-[16px] text-[14px] leading-[1.75]"
                style={{ background: "#000" }}
            >
            </div>
            <Header />
            <div className="flex-grow pl-[16px]  pr-[16px]">
                {/* {historyChatlogRef.current.map((item, index) => {
                    console.log(item);
                    // useMemo((item) => { console.log(item) },[])
                    // console.log(sonRef,item);
                    return (
                        <Dialogue
                            ref={sonRef}
                            content={item}
                            key={index}
                            popLog={popLog}
                        ></Dialogue>
                    );
                })} */}
            </div>
            <Footer />

            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 z-20 py-6 sm:items-start sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end"></div>
            </div>
        </div>

    )
}

export default ChatMain