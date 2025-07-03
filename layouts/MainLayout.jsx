import { Outlet } from "react-router";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import MovieList from "../src/components/MovieList";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
