/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { engineContext } from "../../context/engineContext";
import TopBar from "../../components/TopBar";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import Dropdown from "../../components/Dropdown";

const ResultPage = () => {
  const { data, text }: any = useContext(engineContext);
  const [output, setOutput] = useState(data);

  //update output
  useEffect(() => {
    const outputs = data.filter((val: any) => {
      if (text === "") {
        return data;
      } else if (val[0].toLowerCase().includes(text.toLowerCase())) {
        return val;
      }
    });
    setOutput(outputs);
  }, [text, data]);

  // Pagination
  const rowPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * rowPerPage;
  const indexofFirstRow = indexOfLastRow - rowPerPage;
  const currentRows = output.slice(indexofFirstRow, indexOfLastRow);
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col m-10">
      <TopBar page="resultpage" />

      <Dropdown output={output} setOutput={setOutput} />

      <div className="w-full py-5 mx-auto divide-y-2 lg:w-2/3 divide-slate-200 ">
        {currentRows.map((row: any) => (
          <div key={row} className="flex flex-col mt-6 lg:flex-row ">
            <Card item={row} page="resultpage" />
          </div>
        ))}
      </div>

      <div className="flex mx-auto">
        {output.length > 5 && (
          <Pagination
            paginate={paginate}
            output={output}
            rowPerPage={rowPerPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ResultPage;
