import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
    console.log(data[0].download_url);
  };

  return (
    <div className="p-9">
      <div className="p-5 mt-5 bg-gray-500"></div>
      {data.map(function (elem, idx) {
        return (
          <div
            key={idx}
            className="bg-gray-100 text-black flex items-center justify-between py-6 px-7 rounded mb-3"
          >
            <img className="h-40" src={elem.download_url} alt=""></img>
            <h1>{elem.author}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
