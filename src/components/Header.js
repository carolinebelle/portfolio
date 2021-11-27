//file: src/components/Header.js
import React from "react";
import logo from "../images/fizzbuzz-img.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBar>
      <Icon src={logo} alt="Fizz Buzz FizzBuzz" />
    </HeaderBar>
  );
};
export default Header;
//component styles
const HeaderBar = styled.header`
  position: -webkit-sticky;
  position: sticky;
  padding: 1vw;
  top: 0;
  width: 100%;
  height: 10vw;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  z-index: 5;
`;
const Icon = styled.img`
  max-width: auto;
  height: 100%;
`;
