//file: src/webpages/home.js
import React from "react";
import styled from "styled-components";
import "../style/hoverButton.css";

//component styles
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
`;

class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "START",
      count: 0,
      countToThree: 0,
      countToFive: 0,
    };
  }

  /**
   * Runs the calculation function and updates the states based on the results.
   */
  handleClick() {
    let results = this.calculate();
    this.setState({
      display: results[0] === "" ? this.state.count + 1 : results[0],
      count: this.state.count + 1,
      countToThree: results[1],
      countToFive: results[2],
    });
    return;
  }

  /**
   * Determines the next answer based on the two incrementers (one to 3 and one to 5). It then updates the incrementer.
   * I chose more memory storage for speed. Long division (for modulo) takes 10 times longer and is the intuitive approach.
   * @returns [string, number, number] representing the result to display on the button, the incrementer to 3 and the incrementer to 5
   */
  calculate() {
    let toThree = this.state.countToThree + 1;
    let toFive = this.state.countToFive + 1;
    let result = "";
    if (toThree === 3) {
      result += "FIZZ";
      toThree = 0;
    }
    if (toFive === 5) {
      result += "BUZZ";
      toFive = 0;
    }
    return [result, toThree, toFive];
  }

  render() {
    return (
      <button className="button" onClick={() => this.handleClick()}>
        {this.state.display}
      </button>
    );
  }
}

const Home = () => {
  return (
    <Wrapper>
      <h1>Fizz Buzz Page</h1>
      <p>This is the page with the fizz and buzz.</p>
      <ButtonContainer>
        <FizzBuzz />
      </ButtonContainer>
    </Wrapper>
  );
};
export default Home;
