import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 1100px) {
    padding: 10px;
    position: relative;
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border: 0;
  }

  h1 {
    padding: 0;
    color: white;
    margin: 0;
    border: 0;
  }
  h1:before,
  h1:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  h1:before {
    right: 0.5em;
    margin-left: -100%;
    background-color: white;
  }

  h1:after {
    left: 0.5em;
    background-color: white;
    margin-right: -50%;
  }
`;

export { Container };
