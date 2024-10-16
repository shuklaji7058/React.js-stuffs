import React from "react";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Footer />

      <nav className="bg-emerald-600  flex py-5 px-10 items-center justify-between">
        <h2 className="text-2xl">Shukla</h2>
        <div className="flex gap-8 items-center">
          <h4 className="text-xl">About</h4>
          <h4 className="text-xl">Contact</h4>
          <h4 className="text-xl">Services</h4>
          <h4 className="text-xl">Account</h4>
        </div>
      </nav>
    </>
  );
};
export default App;
