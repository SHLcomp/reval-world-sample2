import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chooseMenu, setChooseMenu] = useState('Home');
  const locate = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(()=>{
    switch (locate.pathname){
      case '/reval-world-sample2/': setChooseMenu("Home");
      break;
      case "/reval-world-sample2/services":
        setChooseMenu("Services");
        break;
      case "/reval-world-sample2/projects":
        setChooseMenu("Projects");
        break;
      case "/reval-world-sample2/about":
        setChooseMenu("About Us");
        break;
      case "/reval-world-sample2/contact":
        setChooseMenu("Contact");
        break;
        case "/reval-world-sample2/colors":
        setChooseMenu("Colors");
        break;
        case "/reval-world-sample2/industrial":
        setChooseMenu("Industrial");
        break;
      default:
        setChooseMenu("Home");
    }
  }, [locate]);


  return (
    <nav>
      <h1>
        <span>Reval</span> World
      </h1>
      <div className="info">
        <ul className={`dropdown ${menuOpen ? "show" : ""}`}>
          <li className={chooseMenu === "Home" ? "clicked" : ""}><Link className="a" to="/reval-world-sample2/">Home</Link></li>
          <li className={chooseMenu === "Services" ? "clicked" : ""}><a href="#ser" className="a">Services</a></li>
          <li className={chooseMenu === "Projects" ? "clicked" : ""}> <Link className="a" to='/reval-world-sample2/projects'> Projects</Link></li>
          <li className={chooseMenu === "About Us" ? "clicked" : ""}> <Link className="a" to='/reval-world-sample2/about'> About Us</Link></li>
          <li className={chooseMenu === "Contact" ? "clicked" : ""}> <Link className="a" to='/reval-world-sample2/contact'>Contact</Link> </li>
          <li className={chooseMenu === "Colors" ? "clicked" : ""}> <Link className="a" to='/reval-world-sample2/colors'>Colors</Link> </li>
          <li className={chooseMenu === "Colors" ? "clicked" : ""}> <Link className="a" to='/reval-world-sample2/colors'>UPVC</Link> </li>
          <li className={chooseMenu === "Industrail" ? "clicked" : ""}> <Link className="a" to='/reval-world-sample2/Industrial'>Industrial</Link> </li>
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
