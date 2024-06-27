//react
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
//pages
import { MainPage } from "./pages/mainPage/MainPage";
import { Header } from "./hocs/Header";
import { Footer } from "./hocs/Footer";
import {MoviePage} from "./pages/moviePage/MoviePage";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";
import { FavoriteMovie } from "./pages/favoriteMovie.tsx/FavoriteMovie";
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
          <Route path="/favorite" element={<FavoriteMovie setIdMovie={setIdMovie}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
