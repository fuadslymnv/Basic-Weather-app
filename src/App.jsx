/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";
import Weather from "./assets/components/Weather";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "a8ce3003af47ba76003efaeb76e19b8e";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  function searchLocation(e) {
    if (e.key === "Enter") {
      axios.get(URL).then((res) => {
        setData(res.data);
      });
      setLocation("");
    }
  }
  return (
    <div className="w-full h-full bg-slate-500 ">
      <div className="text-center p-4 mb-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-3xl border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
