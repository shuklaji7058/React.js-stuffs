import React from "react";

const Card = (props) => {
  console.log(props.photo);
  return (
    <div className="mr-7 bg-white text-black inline-block p-9 text-center rounded">
      <img
        className=" ml-6 h-32 w-32 rounded-full mb-3"
        src={props.photo}
        alt=""
      ></img>
      <h1 className="text-2xl rounded-full mb-4">{props.username}</h1>
      <h4 className="text-blue-400">{props.prof}</h4>
      <h2>
        {props.city},{props.age}
      </h2>
      <button className="mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
