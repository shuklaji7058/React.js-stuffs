import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserContext from "./context/UserContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
  </UserContext>
);
