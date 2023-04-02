import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import "./Styles/Index.css";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";


function App() {
  return (
    <section className="booklist">
      <Header />
      <Home />
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
