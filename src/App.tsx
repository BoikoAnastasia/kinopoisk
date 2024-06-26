import React from "react";
import "./App.css";
import { MainPage } from "./pages/mainPage/MainPage";
import { Header } from "./hocs/Header";
import { Footer } from "./hocs/Footer";

function App() {
  return (
    <div className=" page">
      <Header />
      <div className="main wrapper">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
