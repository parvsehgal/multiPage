import { NavLink, NavLinkink } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="navbar">
      <NavLink className="home" to="/">
        Home
      </NavLink>
      <NavLink className="emp" to="/emp">
        Employees
      </NavLink>
      <NavLink className="abt" to="/about">
        About
      </NavLink>
    </div>
  );
}
export default Nav;
