import React, { useState } from "react";
import { HAMBURGER_LOGO, YOUTUBE_LOGO } from "../utils/common";
import Sidebar from "./Sidebar";

const Head = ({ collapseSidebar }) => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={collapseSidebar}
          className="h-8 mr-2"
          src={HAMBURGER_LOGO}
          alt="hamburger"
        />
        <img className="h-8 ml-2" src={YOUTUBE_LOGO} alt="youtube" />
      </div>
      <div className="col-span-10">
        <input
          className="w-1/2 border border-gray-400 p-1  rounded-l-full"
          type="text"
          placeholder="search..."
        />
        <button className="border border-gray-400 p-1 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://yt3.ggpht.com/yti/AGOGRCrHOQEbZWlBVMy1WBL3e_WxWMsfS_6NhGxwWFxTyZ0=s88-c-k-c0x00ffffff-no-rj"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Head;
