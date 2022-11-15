import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import App from "./App";
import Profile from "./pages/loginsignup.jsx/profile";
import AddMovie from "./components/addMovie/addMovie";
import Movie from "./components/addMovie/movie";
import MovieItem from "./components/addMovie/movieItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path="login" element={<Profile />}></Route>
          <Route path="app" element={<App />}></Route>
          <Route path="addMovie" element={<AddMovie />}></Route>
          <Route path="Movie" element={<Movie />}></Route>
          <Route path="Movie/:name" element={<MovieItem />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
