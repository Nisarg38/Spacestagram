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
import github from "./github.svg";

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
              <h1 style={{ color: "#FF6A3D" }}>SPACE</h1>
              <h1 style={{ color: "white" }}>stagram</h1>
            </Logo>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems></NavItems>
            <NavItems></NavItems>
            <NavItems>
              <NavLinks>
                <a
                  href="https://github.com/Nisarg38/Spacestagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={github}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginBottom: "20px",
                    }}
                    alt=""
                  />
                </a>
              </NavLinks>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
