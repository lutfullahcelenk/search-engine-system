/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//context
import { engineContext } from "./context/engineContext";
//store
import { initialStates } from "./store/initialStates";
//pages
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  const [data, setData] = useState(initialStates);
  const [text, setText] = useState("");

  // OUTPUTS
  const output = data.filter((val) => {
    if (text === "") {
      return data;
    } else if (val[0].toLowerCase().includes(text.toLowerCase())) {
      return val;
    }
  });

  return (
    <Router>
      <engineContext.Provider
        value={{
          data,
          text,
          output,
          setText,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resultpage" element={<ResultPage />} />
          <Route path="/addpage" element={<AddPage />} />
        </Routes>
      </engineContext.Provider>
    </Router>
  );
};

export default App;
