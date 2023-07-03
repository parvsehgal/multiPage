import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="navbar">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="emp" to="/emp">
        Employees
      </Link>
      <Link className="abt" to="/about">
        About
      </Link>
    </div>
  );
}
export default Nav;
