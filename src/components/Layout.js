import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import "../App.css";

const Layout = () => {
    return (
      <>
        <Navbar />
        <Hero />

        <Outlet />
        
        <Footer />
      </>
    );
};
  
export default Layout;