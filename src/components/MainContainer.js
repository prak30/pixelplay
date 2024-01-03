import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <div className="ml-60">
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
