// @ts-nocheck
import React from "react";
//assets
import location from "../../assets/location.png";

type ICard = {
  item: [];
  page: string;
};

const Card = ({ item, page }: ICard) => {
  return (
    <div className="w-full">
      {page === "home" && (
        <div className="flex items-center justify-start">
          <img src={location} alt="location" className="w-4 h-6 " />

          <div className="px-4 py-2">
            <p className="font-semibold">{item[0]}</p>
            <p className="text-sm text-gray-500">{item[1]}</p>
          </div>
        </div>
      )}

      {page === "resultpage" && (
        <div className="flex items-center justify-between py-3 mt-3 lg:px-6 hover:bg-hoverBlue hover:rounded-xl">
          <div className="flex items-center">
            <img src={location} alt="location" className="w-4 h-6 " />

            <div className="px-4 py-2">
              <p className="font-semibold">{item[0]}</p>
              <p className="text-sm text-gray-500">{item[1]}</p>
            </div>
          </div>

          <div className="flex flex-col items-end px-4 py-2">
            <p className="text-sm text-gray-500">{item[5]}</p>
            <p className="font-semibold">{item[3]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
