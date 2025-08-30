import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log("heyy");
  };

  return (
    <nav>
      <h1>
        <span>Reval</span> World
      </h1>
      <div className="info">
        <ul className={`dropdown ${menuOpen ? "show" : ""}`}>
          <li><Link className="a" to="/reval-world-sample2/">Home</Link></li>
          <li><a href="#ser" className="a">Services</a></li>
          <li>Projects</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <ul className="contact-info">
          <li><i className="fa-solid fa-phone"></i>+966 123456789</li>
          <li><i className="fa-brands fa-whatsapp"></i>Whatsapp</li>
          <i
            className={`fa-solid fa-2xl ${menuOpen ? "fa-xmark" : "fa-bars"}`}
            id="menuBar"
            onClick={toggleMenu}
          ></i>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
