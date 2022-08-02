// @ts-nocheck
import React, { useState } from "react";
import order from "../../assets/order.svg";

const Dropdown = ({ output, setOutput }: any) => {
  const [orderOpen, setOrderOpen] = useState(false);

  const ascendingName = () => {
    output.sort();
    setOutput([...output]);
    setOrderOpen(false);
  };

  const descendingName = () => {
    output.sort().reverse();
    setOutput([...output]);
    setOrderOpen(false);
  };

  const yearAscending = () => {
    output.sort((a: any, b: any) =>
      b[3]
        .split("/")
        .reverse()
        .join()
        .localeCompare(a[3].split("/").reverse().join())
    );
    setOutput([...output]);
    setOrderOpen(false);
  };

  const yearDescending = () => {
    output
      .sort((a: any, b: any) =>
        b[3]
          .split("/")
          .reverse()
          .join()
          .localeCompare(a[3].split("/").reverse().join())
      )
      .reverse();
    setOutput([...output]);
    setOrderOpen(false);
  };

  return (
    <div className="relative flex justify-end w-2/3 mx-auto mt-12">
      <button
        className="flex px-3 py-1 bg-gray-300 border-2 border-black rounded-md"
        onClick={() => setOrderOpen(!orderOpen)}
      >
        <img src={order} alt="order" className="" />
        Order By
      </button>
      <div
        className={`${
          orderOpen ? "flex" : "hidden"
        } flex-col absolute -right-2 top-8 mt-1 bg-white shadow-lg border rounded-lg  py-2 px-4`}
      >
        <button
          className="flex justify-start px-2 py-1 hover:bg-gray-300 hover:rounded-lg"
          onClick={ascendingName}
        >
          Name ascending
        </button>
        <button
          className="flex justify-start px-2 py-1 hover:bg-gray-300 hover:rounded-lg"
          onClick={descendingName}
        >
          Name descending
        </button>
        <button
          className="flex justify-start px-2 py-1 hover:bg-gray-300 hover:rounded-lg"
          onClick={yearAscending}
        >
          Year ascending
        </button>
        <button
          className="flex justify-start px-2 py-1 hover:bg-gray-300 hover:rounded-lg"
          onClick={yearDescending}
        >
          Year descending
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
