import "./Navbar.css";
import Logo from "../../../public/images/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const isSlideShowPage = location.pathname.startsWith("/gallery-image");

  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <Link className="slideLink" to={isSlideShowPage ? "/" : "/gallery-image/1"}>
          <h1>{isSlideShowPage ? "Stop slideshow" : "Start slideshow"}</h1>
        </Link>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default Nav;
