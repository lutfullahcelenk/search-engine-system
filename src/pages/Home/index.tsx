// @ts-nocheck
import React from "react";
// assets
import logo from "../../assets/logo.png";
//components
import Form from "../../components/Form";
import Sliders from "../../components/Sliders";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end m-10 lg:m-20">
        <button
          type="button"
          className="px-6 py-2 text-xs text-white rounded-lg bg-darkBlue lg:text-base"
        >
          Add New Record
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-40 h-12 sm:w-60 sm:h-20" />
        <p className="py-1 pl-40 text-xs lg:pl-60">Search app</p>
      </div>

      <Form />
      <Sliders />
      <Footer />
    </div>
  );
};

export default Home;
