import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="px-3 py-4 text-xl m-5 rounded  bg-blue-50 outline-blue-300"
          type="text"
          placeholder="Enter Your name"
        ></input>
        <button className="px-6 py-3 ml-9 text-xl  rounded   bg-emerald-700 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;
