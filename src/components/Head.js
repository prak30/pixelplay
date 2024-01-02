import React from "react";
import { HAMBURGER_LOGO, YOUTUBE_LOGO } from "../utils/common";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/common";
import { useState, useEffect } from "react";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggession, setSuggession] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggessions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggessions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setSuggession(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 mr-2 cursor-pointer"
          src={HAMBURGER_LOGO}
          alt="hamburger"
        />
        <img className="h-8 ml-2" src={YOUTUBE_LOGO} alt="youtube" />
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-1  rounded-l-full"
            type="text"
            placeholder="search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-1 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[45rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggession.map((s, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 "
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
