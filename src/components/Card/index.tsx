// @ts-nocheck
import React from "react";
//assets
import location from "../../assets/location.png";

type ICard = {
  item: [];
};

const Card = ({ item }: ICard) => {
  return (
    <div className="flex items-center justify-start">
      <img src={location} alt="location" className="w-4 h-6 " />

      <div className="px-4 py-2">
        <p className="font-semibold">{item[0]}</p>
        <p className="text-sm text-gray-500">{item[1]}</p>
      </div>
    </div>
  );
};

export default Card;
