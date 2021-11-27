//file: src/webpages/about.js
import React from "react";
import profilepic from "../images/CarolineYoon.png";
import styled from "styled-components";
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>All about the talent of me</p>
      <Profile src={profilepic} alt="Fizz Buzz FizzBuzz" />
    </div>
  );
};
export default About;

//component styles
const Profile = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: 70% 0%;
  border-radius: 50%;
`;
