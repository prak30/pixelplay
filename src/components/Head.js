import React from "react";
import { HAMBURGER_LOGO, YOUTUBE_LOGO } from "../utils/common";

const Head = () => {
  return (
    <div className="flex bg-slate-200 justify-between w-auto h-12">
      <div className="flex mx-2">
        <img className="mr-2" src={HAMBURGER_LOGO} alt="hamburger" />
        <img className="ml-2" src={YOUTUBE_LOGO} alt="youtube" />
      </div>
      <div className="flex">
        <input
          className="w-96 px-4 py-2 border border-gray-400  rounded-l-full"
          type="text"
          placeholder="search..."
        />
        <input
          className="w-8 py-2 border border-gray-400   rounded-r-full"
          type="text"
          placeholder="🔍"
        />
      </div>
      <div>
        <img
          className="h-12"
          src="https://yt3.ggpht.com/yti/AGOGRCrHOQEbZWlBVMy1WBL3e_WxWMsfS_6NhGxwWFxTyZ0=s88-c-k-c0x00ffffff-no-rj"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Head;
