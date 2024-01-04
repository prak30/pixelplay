import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("hello");
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage(25),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="ml-2 w-full h-[600px] p-2 border border-black rounded-lg overflow-y-scroll">
      {chatMessage.map((chatMessage, index) => (
        <ChatMessage
          key={index}
          name={chatMessage.name}
          message={chatMessage.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
