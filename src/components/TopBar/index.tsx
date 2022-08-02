//@ts-nocheck
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { engineContext } from "../../context/engineContext";
//assets
import logo from "../../assets/logo.png";

type ITopBar = {
  page: string;
};

const TopBar = ({ page }: ITopBar) => {
  const navigate = useNavigate();
  const { text, setText }: any = useContext(engineContext);


  // Search Bar Optimization
  const handleClick = () => {
    if (!text) {
      alert("Fill in the gap...");
    } else {
      setText(text);
    }
  };

  return (
    <div className="flex flex-col items-center xl:flex-row">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        className="w-32 h-12"
      />

      {page === "resultpage" && (
        <>
          <div className="flex flex-col flex-grow px-2 py-2 lg:px-20 lg:flex-row">
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
              disabled={text ? false : true}
              className={`px-8 py-2 mt-3 text-white rounded-lg lg:mt-0 ${
                text ? "bg-darkBlue" : "bg-gray-500"
              } lg:ml-3`}
            >
              Search
            </button>
          </div>

          <button
            type="button"
            className="px-6 py-2 text-xs text-white rounded-lg bg-darkBlue lg:text-base"
            onClick={() => navigate("/addpage")}
          >
            Add New Record
          </button>
        </>
      )}

      {page === "addpage" && <>add</>}
    </div>
  );
};

export default TopBar;
