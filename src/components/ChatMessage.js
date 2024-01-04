import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 mr-2"
        src="https://yt3.ggpht.com/yti/AGOGRCrHOQEbZWlBVMy1WBL3e_WxWMsfS_6NhGxwWFxTyZ0=s88-c-k-c0x00ffffff-no-rj"
        alt="profile"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
