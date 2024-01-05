import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateMessage, generateName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
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
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 w-full h-[600px] p-2 border border-black rounded-lg overflow-y-scroll flex-col-reverse flex">
        <div>
          {chatMessage.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <form
        className="ml-2 rounded-lg p-2 w-full border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Pranavatar",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-96 px-2"
          type="text"
          placeholder="Type Message Here"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-500 rounded-xl">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
