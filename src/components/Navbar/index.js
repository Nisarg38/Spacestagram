import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  Logo,
  Logoimg,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import logo from "./logo.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setscrollNav(true);
    else setscrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scroll={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo>
              <Logoimg src={logo} />
              <h1 style={{ color: "orange" }}>SPACE</h1>
              <h1 style={{ color: "white" }}>stagram</h1>
            </Logo>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="/aboutme"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="/api"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                API
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="/contact"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact Me
              </NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
