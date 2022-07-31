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

  return (
    <Router>
      <engineContext.Provider
        value={{
          data,
          text,
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
