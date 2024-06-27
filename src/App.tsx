//react
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
//pages
import { MainPage } from "./pages/mainPage/MainPage";
import { Header } from "./hocs/Header";
import { Footer } from "./hocs/Footer";
import {MoviePage} from "./pages/moviePage/MoviePage";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";
// css
import "./App.css";

function App() {
  const [idMovie, setIdMovie] = useState(0);

  return (
    <div className=" page">
      <Header />
      <div className="main wrapper">
        <Routes>
          <Route path="/" element={<MainPage setIdMovie={setIdMovie}/>}/>
          <Route path="/movie/:id" element={<MoviePage id={idMovie} />}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
