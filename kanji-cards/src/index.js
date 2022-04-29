import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
const menuItems = [{ name: "Home" }, { name: "New Card" }, { name: "Review" }];

root.render(<App menuItems={menuItems} />);
