import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  //set nav toggle state
  const [active, setActive] = useState("none");

  //toggle mobile nav
  const toggleMobileMenu = () => {
    active === "none" ? setActive("block") : setActive("none");
  };

  return (
    <Fixed>
      <NavStyled>
        <NavToggleStyled
          icon={active === "none" ? faBars : faTimes}
          onClick={toggleMobileMenu}
        />
        <NavItemsStyled active={active}>
          <NavItemStyled>
            <a href="#">Home</a>
          </NavItemStyled>
          <NavItemStyled>
            <a href="#">About</a>
          </NavItemStyled>
          <NavItemStyled>
            <a href="#">Rooms</a>
          </NavItemStyled>
          <NavItemStyled>
            <a href="#">Services</a>
          </NavItemStyled>
          <NavItemStyled>
            <a href="#">Gallery</a>
          </NavItemStyled>
          <NavItemStyled>
            <a href="#">See & Do</a>
          </NavItemStyled>
          <NavItemStyled>
            <a href="#">Contact</a>
          </NavItemStyled>
        </NavItemsStyled>
        <Button show={active === "block" ? "none" : ""}>Book A Room</Button>
      </NavStyled>
    </Fixed>
  );
};

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
`;

//Main Nav Container
const NavStyled = styled.nav`
  font-size: 14px;
  background: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 35px;
  @media (min-width: 768px) {
    padding: 10px;
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
  }
`;

//Navigation Items Container
const NavItemsStyled = styled.ul`
  list-style-type: none;
  display: ${(props) => props.active};
  @media (min-width: 768px) {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

//Navigation Links
const NavItemStyled = styled.li`
  text-align: center;
  margin: 25px auto;
  @media (min-width: 768px) {
    margin: 0;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: rgb(160, 160, 159);
    }
    @media (min-width: 768px) {
      margin-left: 40px;
    }
  }
`;

// NavBar Toggle
const NavToggleStyled = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 48px;
  border: 1px solid white;
  padding: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;

//Book A Room Button
const Button = styled.a`
  text-align: center;
  padding: 1rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 1px solid white;
  display: ${(props) => props.show};
  &:hover {
    background: white;
    color: black;
  }
  @media (max-width: 768px) {
    padding: 1rem 4rem;
  }
`;

export default Navbar;
