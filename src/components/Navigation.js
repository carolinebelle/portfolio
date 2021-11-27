//file: src/components/Navigation.js
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const NavUnlisted = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1em;
  a {
    text-decoration: none;
  }

  li {
    color: black;
    margin: 0.5vw 0;
    font-size: 1.3rem;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;
const Navigation = () => {
  // function whichStyle(isActive, name) {
  //   if (!isActive) return name;
  //   return "current";
  // }
  return (
    <Nav>
      <NavUnlisted>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="default"
            style={(isActive) => ({
              fontWeight: isActive ? "bold" : "normal",
              flexDirection: "column",
              alignItems: "flex-start",
            })}
          >
            <li>{link.name}</li>
          </NavLink>
        ))}
      </NavUnlisted>
    </Nav>
  );
};
export default Navigation;

//component styles
const Nav = styled.nav`
  padding-top: 1em;
  flex-basis: 20%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  z-index: 2;
  background-color: rgba(6, 99, 71, 0.3);
`;
// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   color: black;
//   .hover {
//     font-weight: bold;
//   }
//   .active {
//     font-weight: bold;
//     color: black;
//   }
// `;
