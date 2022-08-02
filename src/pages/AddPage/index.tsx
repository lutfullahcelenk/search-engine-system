// @ts-nocheck
import { useState, useContext } from "react";
import { engineContext } from "../../context/engineContext";
import TopBar from "../../components/TopBar";
import close from "../../assets/close.svg";

const AddPage = () => {
  const { AddRecord }: any = useContext(engineContext);
  const [name, setName] = useState("");
  const nameError = "Name and surname should contain at least 2 words";
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const cityError = "City must contain at least 2 letters";
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [isClose, setIsClose] = useState(true);

  // date adding
  const todayFunc = (digit: any) => ("0" + digit).slice(-2);
  const today = new Date();
  const date = `${todayFunc(today.getDate())} /${todayFunc(
    today.getMonth() + 1
  )} /${today.getFullYear()}`;

  // Add Record
  const handleAdd = (e: any) => {
    e.preventDefault();
    if (name.split(" ").length > 1 && country && city.length > 1 && email) {
      setError(false);
      setSuccess(true);
      setIsClose(false);
      AddRecord([name, "Lutfullah Company", email, date, country, city]);
    }
    if (name.split(" ").length < 2) {
      setError(true);
      setSuccess(false)
      setIsClose(false)
    }

    if (city.length < 2) {
      setError(true);
      setSuccess(false)
      setIsClose(false)
    }

    setName("");
    setCountry("");
    setCity("");
    setEmail("");
  };

  return (
    <div className="relative flex flex-col h-screen p-10">
      <TopBar page="addpage" />

      <form className="w-full pt-20 lg:w-1/2 lg:mx-auto" onSubmit={handleAdd}>
        <div className="flex flex-col w-full py-3">
          <label
            htmlFor="namesurname"
            className={`py-2 pb-1 text-sm tracking-wide ${
              error && "text-red-500"
            }`}
          >
            Name Surname
          </label>
          <input
            id="namesurname"
            type="text"
            className={`px-3 py-2 border-2 ${
              error ? "border-red-500" : "border-black"
            }  rounded-lg outline-none focus:bg-gray-200`}
            placeholder="Enter name and surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className={`${error ? "flex text-red-500 pt-3" : "hidden"}`}>
            {nameError}
          </span>
        </div>

        <div className="flex flex-col w-full py-3">
          <label htmlFor="country" className="py-2 pb-1 text-sm tracking-wide">
            Country
          </label>
          <input
            id="country"
            type="text"
            className="px-3 py-2 border border-black rounded-lg outline-none focus:bg-gray-200"
            onChange={(e) => setCountry(e.target.value)}
            pattern="[a-zA-Z\s]+"
            value={country}
            placeholder="Enter a country"
          />
        </div>

        <div className="flex flex-col w-full py-3">
          <label
            htmlFor="city"
            className={`py-2 pb-1 text-sm tracking-wide ${
              error && "text-red-500"
            }`}
          >
            City
          </label>
          <input
            id="city"
            type="text"
            className={`px-3 py-2 border-2 ${
              error ? "border-red-500" : "border-black"
            }  rounded-lg outline-none focus:bg-gray-200`}
            onChange={(e) => setCity(e.target.value)}
            pattern="[a-zA-Z\s]+"
            value={city}
            placeholder="Enter a city"
          />
          <span className={`${error ? "flex text-red-500 pt-3" : "hidden"}`}>
            {cityError}
          </span>
        </div>

        <div className="flex flex-col w-full py-3">
          <label htmlFor="email" className="py-2 pb-1 text-sm tracking-wide">
            Email
          </label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border border-black rounded-lg outline-none focus:bg-gray-200"
            value={email}
            placeholder="Enter an e-mail (abc@xyz.com)"
          />
        </div>

        <div className="flex justify-end w-full pt-6">
          <button
            type="submit"
            className="px-10 py-2 text-white border rounded-lg bg-darkBlue hover:bg-buttonHover"
          >
            Add
          </button>
        </div>
      </form>

      <div
        className={`${
          isClose ? "hidden" : "hidden lg:flex"
        } flex-col justify-end absolute bottom-10 right-10 bg-gray-300 py-2 px-4 rounded-lg`}
      >
        <div className="flex justify-end py-2">
          <img
            src={close}
            className="flex w-5"
            alt="close"
            onClick={() => setIsClose(true)}
          />
        </div>

        <div className="flex justify-between text-sm font-bold">
          <h3 className="-mt-2">
            {success
              ? "New record successfully added"
              : "Error while adding link element"}
          </h3>
          <div className="pt-1">
            <span className="px-2 py-1 text-sm text-white bg-pink-500 border rounded-xl">
              {success ? "Success" : "Error"}
            </span>
          </div>
        </div>

        <p className="w-2/3 pt-2 text-xs font-light"> {error && nameError} </p>
      </div>
    </div>
  );
};

export default AddPage;
