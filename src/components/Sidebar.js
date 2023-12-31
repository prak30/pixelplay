import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="m-2 p-5 shadow-lg w-52">
      <ul>
        <li className="m-1 p-1 font-bold">Home</li>
        <li className="m-1 p-1 font-bold">Shots</li>
        <li className="m-1 p-1 font-bold">Subscriptions</li>
      </ul>
      <hr className="mt-4 mb-4 border-t-1 border-black"></hr>
      <ul>
        <li className="m-1 p-1 font-bold">You ▶️</li>
        <li className="m-1 p-1 ">Your Channel</li>
        <li className="m-1 p-1 ">History</li>
        <li className="m-1 p-1 ">Watch Later</li>
        <li className="m-1 p-1 ">Downloads</li>
        <li className="m-1 p-1 ">Show More</li>
      </ul>
      <hr className="mt-4 mb-4 border-t-1 border-black"></hr>
      <h1 className="font-bold m-1 p-1">Subscriptions</h1>
      <ul>
        <li className="m-1 p-1 ">Channel1</li>
        <li className="m-1 p-1 ">Channel2</li>
        <li className="m-1 p-1 ">Channel3</li>
        <li className="m-1 p-1 ">Channel4</li>
        <li className="m-1 p-1 ">Channel5</li>
        <li className="m-1 p-1 ">Channel6</li>
      </ul>
      <hr className="mt-4 mb-4 border-t-1 border-black"></hr>
      <h1 className="font-bold m-1 p-1">Explore</h1>
      <ul>
        <li className="m-1 p-1 ">Trending</li>
        <li className="m-1 p-1 ">Shopping</li>
        <li className="m-1 p-1 ">Music</li>
        <li className="m-1 p-1 ">Films</li>
        <li className="m-1 p-1 ">Live</li>
        <li className="m-1 p-1 ">Gaming</li>
        <li className="m-1 p-1 ">News</li>
        <li className="m-1 p-1 ">Sports</li>
        <li className="m-1 p-1 ">Learning</li>
        <li className="m-1 p-1 ">Fashion</li>
        <li className="m-1 p-1 ">Podcasts</li>
      </ul>
      <hr className="mt-4 mb-4 border-t-1 border-black"></hr>
      <h1 className="font-bold m-1 p-1">More from YouTube</h1>
      <ul>
        <li className="m-1 p-1 ">YouTube Premium</li>
        <li className="m-1 p-1 ">YouTube Studio</li>
        <li className="m-1 p-1 ">YouTube Music</li>
        <li className="m-1 p-1 ">YouTube Kids</li>
      </ul>
    </div>
  );
};

export default Sidebar;
