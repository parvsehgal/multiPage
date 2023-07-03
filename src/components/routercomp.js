import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./nav";
import Home from "./Home";
import About from "./about";
import Emp from "./emp";
function Routercomp() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emp" element={<Emp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routercomp;
