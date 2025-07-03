import "./index.css";
import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
