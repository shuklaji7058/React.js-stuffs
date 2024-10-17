import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = [
    {
      name: "Alice Johnson",
      city: "New York",
      age: 28,
      profession: "Software Engineer",
      profile_photo: "https://example.com/photos/alice.jpg",
    },
    {
      name: "Michael Brown",
      city: "Los Angeles",
      age: 35,
      profession: "Graphic Designer",
      profile_photo: "https://example.com/photos/michael.jpg",
    },
    {
      name: "Sophia Lee",
      city: "Chicago",
      age: 24,
      profession: "Marketing Specialist",
      profile_photo: "https://example.com/photos/sophia.jpg",
    },
    {
      name: "David Smith",
      city: "San Francisco",
      age: 42,
      profession: "Product Manager",
      profile_photo: "https://example.com/photos/david.jpg",
    },
    {
      name: "Emma Davis",
      city: "Houston",
      age: 31,
      profession: "Architect",
      profile_photo: "https://example.com/photos/emma.jpg",
    },
  ];
  return (
    <div>
      <div className="p-10">
        {users.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              username={elem.name}
              age={elem.age}
              prof={elem.profession}
              city={elem.city}
              photo={elem.profile_photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
