import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
