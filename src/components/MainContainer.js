import React from "react";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div>
      <div className="flex">
        <ButtonList />
        <ButtonList />
        <ButtonList />
        <ButtonList />
        <ButtonList />
        <ButtonList />
      </div>
    </div>
  );
};

export default MainContainer;
