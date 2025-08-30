import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <h1>
        <span>Reval</span> World
      </h1>
      <ul>
        <Link to='/reval-world-sample2/'></Link><li>Home</li>
        <a href="#ser" className="a"><li>Services</li></a>
        <li>Projects</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
