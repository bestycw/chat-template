import React from "react";


const Header: React.FC = () => {


    return (
        <div className="sticky top-0  w-full  z-50">
            <div
                className="flex justify-between p-2 z-10 sm:h-[70px] h-[60px] bg-white sm:bg-[#E5F1FF] mb-4"
                style={{
                    borderBottom: "1px solid #f4f4f5",
                }}
            >
                <div className="flex items-center mx-4">
                    <div className="flex items-center">
                        <img width="35"  className="rounded-full m-1 mr-2" src="https://backend.chatbase.co/storage/v1/object/public/chatbots-profile-pictures/4a84dc98-32e3-4cf7-9aaf-9df171bd7f8a/chatbase--1--pdf-p680fxvnm.svg?width=96&quality=50" alt="" />
                        <h1 className="text-lg font-bold text-zinc-700">ChatDemo</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-sm py-3  hover:text-zinc-600 text-zinc-700">
                        重置
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header