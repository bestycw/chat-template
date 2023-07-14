import React from "react";


const Header: React.FC = () => {


    return (
        <div className="sticky top-0  w-full  z-50">
            <div
                className="flex justify-between py-1  z-10 sm:h-[76px] h-[62px] bg-white sm:bg-[#E5F1FF] mb-4"
                style={{
                    borderBottom: "1px solid #f4f4f5",
                }}
            >
                <div className="flex items-center mx-4">
                    <img
                        alt="profile picture"
                        src={require(".../static/logo.png")}
                        decoding="async"
                        // data-nimg="1"
                        className="sm:h-[40px] h-[35px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header