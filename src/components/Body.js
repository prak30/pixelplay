import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
