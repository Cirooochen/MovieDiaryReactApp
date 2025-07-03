import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <MovieList />
      <Footer />
    </div>
  );
};

export default MainLayout;
