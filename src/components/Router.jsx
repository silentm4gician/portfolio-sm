import { Route, Routes } from "react-router-dom";
import App from "../App";
import Proyects from "../pages/Proyects";
import Skills from "../pages/Skills";
import NavBar from "./NavBar";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Router;
