// @ts-nocheck
import { useContext } from "react";
import { engineContext } from "../../context/engineContext";
import { useNavigate } from "react-router-dom";
import search from "../../assets/search.svg";
import Card from "../Card";

const Form = () => {
  const navigate = useNavigate();
  const { text, output, setText }: any = useContext(engineContext);

  // Search Bar Optimization
  const handleClick = (e: any) => {
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setText(text);
      navigate("/resultpage");
    }
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto lg:w-1/2 ">
      <h2 className="w-full px-6 py-2 text-lg font-bold tracking-wide lg:text-2xl">
        Find in records
      </h2>

      <div className="flex flex-col w-full px-8 py-2 lg:flex-row">
        <div className="flex w-full px-3 py-3 border border-black rounded-xl">
          <img src={search} alt="search-bar" className="" />
          <input
            type="text"
            className="pl-4 outline-none"
            placeholder="Search"
            value={text}
            prefix={search}
            onChange={(e: any) => setText(e.target.value)}
          />
        </div>
        <button
          onClick={handleClick}
          type="button"
          disabled={text && text.length > 1 ? false : true}
          className={`px-8 py-3 mt-3 text-white rounded-lg lg:mt-0 ${
            text ? "bg-darkBlue hover:bg-buttonHover" : "bg-gray-500"
          } lg:ml-3 `}
        >
          Search
        </button>
      </div>

      <div className="w-full p-6 mt-4 border border-black rounded-3xl">
        {output.slice(0, 3).map((item: any, index: number) => (
          <Card key={index} item={item} page="home" />
        ))}

        {output.length > 3 && (
          <div className="flex justify-center">
            <button
              type="button"
              className="py-4 text-sm font-bold"
              onClick={() => navigate("/resultpage")}
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
