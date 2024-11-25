import { Route, Routes } from "react-router-dom";
import App from "../App";
import Proyects from "../pages/Proyects";
import Skills from "../pages/Skills";
import Links from "./Links";
import NavBar from "./NavBar";
import Work from "../pages/Work";

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
      </Routes>
    </>
  );
};

export default Router;
