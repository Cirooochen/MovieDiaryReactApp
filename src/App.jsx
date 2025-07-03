import "./index.css";
import { Routes, Route, Link } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import MovieDetails from "../components/MovieDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
