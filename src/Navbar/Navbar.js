import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <div className="text-container">
          <span>C</span>
          <span>i</span>
          <span>n</span>
          <span>e</span>
          <span>m</span>
          <span>a</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>L</span>
          <span>i</span>
          <span>g</span>
          <span>h</span>
          <span>t</span>
          <span>H</span>
          <span>o</span>
          <span>u</span>
          <span>s</span>
          <span>e</span>
        </div>
      </NavLink>
    </nav>
  );
};
