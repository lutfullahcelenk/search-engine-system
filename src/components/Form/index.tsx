import React, { useContext } from "react";
import { engineContext } from "../../context/engineContext";
import { useNavigate } from "react-router-dom";
//components
import Card from "../Card";

const Form = () => {
  const navigate = useNavigate();
  const { text, output, setText }: any = useContext(engineContext);

  // Search Bar Optimization
  const handleClick = (e: any) => {
    e.preventDefault();
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setText(text);
    }
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto lg:w-1/2 ">
      <h2 className="w-full px-6 py-2 text-lg font-bold tracking-wide lg:text-2xl">
        Find in records
      </h2>

      <div className="flex flex-col w-full px-8 py-2 lg:flex-row">
        <input
          type="text"
          className="w-full px-3 py-2 border border-black rounded-xl "
          placeholder="Search"
          value={text}
          onChange={(e: any) => setText(e.target.value)}
        />
        <button
          onClick={handleClick}
          type="button"
          className="px-8 py-2 mt-3 text-white rounded-lg lg:mt-0 bg-darkBlue lg:ml-3"
        >
          Search
        </button>
      </div>

      <div className="w-full p-6 mt-4 border border-black rounded-3xl">
        {output.slice(0, 3).map((item: any, index: number) => (
          <Card key={index} item={item} />
        ))}

        {output.length > 3 && (
          <div className="flex justify-center">
            <button
              type="button"
              className="py-4 text-sm font-bold"
              onClick={() => navigate("/resultpage", { state: { output } })}
            >
              Show More...
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
