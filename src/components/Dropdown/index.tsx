import React, { useState } from "react";

const Dropdown = ({ output, setOutput }: any) => {
  const [orderOpen, setOrderOpen] = useState(false);

  const ascendingName = () => {
    output.sort();
    setOutput([...output]);
  };

  const descendingName = () => {
    output.sort().reverse();
    setOutput([...output]);
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
  };

  return (
    <div className="flex justify-end w-2/3 mx-auto mt-12">
      <button className="order-btn" onClick={() => setOrderOpen(!orderOpen)}>
        Order By
      </button>
      <div className={`${orderOpen ? "block" : "hidden"}`}>
        <button onClick={ascendingName}>Name ascending</button>
        <button onClick={descendingName}>Name descending</button>
        <button onClick={yearAscending}>Year ascending</button>
        <button onClick={yearDescending}>Year descending</button>
      </div>
    </div>
  );
};

export default Dropdown;
