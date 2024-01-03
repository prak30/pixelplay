import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Live",
    "Music",
    "NBA",
    "Startups",
    "Finance",
    "NFT",
    "Philosophy",
    "History",
    "Literature",
    "Travel",
    "LifeStyle",
    "Dancing",
    "Comedy",
    "Politics",
    "Gaming",
    "Cooking",
    "ComputerScience",
    "Art",
  ];
  return (
    <div className="flex ">
      {buttonList.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
