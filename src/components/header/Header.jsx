import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import logo from "../../assets/logo.png";
import { links } from "../../Data";
import { FaStream } from "react-icons/fa";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);

  return (
    <header className={`${scrollHeader ? "scroll-header" : ""} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav__logo">
          <img src={logo} alt="logo" className="nav__logo-img" />
        </Link>

        <div className={`${showMenu ? "show-menu" : ""} nav__menu`}>
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav__item" key={index}>
                  <Link
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    hashSpy={true}
                    className="nav__link"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <FaStream />
        </div>
      </nav>
    </header>
  );
};

export default Header;
