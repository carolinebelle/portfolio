import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Navigation />
        <Main>{children}</Main>
      </Wrapper>
    </React.Fragment>
  );
};
export default Layout;

//component styles
const Wrapper = styled.div`
  position: fixed;
  top: 12vw;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: stretch;
  font-family: Helvetica, Arial, sans-serif;
`;
const Main = styled.main`
  width: 100%;
  padding: 1em;
  overflow-y: scroll;
  z-index: 1;
`;
