import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const App = () => { 
  const [count, setCount] = useState(0);

  const Save = () => {
    sessionStorage.setItem("count", count);

    let p = document.getElementById("p");
    p.innerHTML = sessionStorage.getItem("count");


  };

  return (
    <>
      <Container>

        <Head>
          <div id='head'>
            <p>❄ Counter App ❄ </p>
          </div>
        </Head>


        <Title> 🚀 Current Count : {count}</Title>

        <Buttons id='buttons'>
          <button className="changebtn"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase by 1
          </button>
          <button className="changebtn"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
          <button className="changebtn"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrease by 1
          </button>
        </Buttons>

        <div id='sbtn'>
          <div>

            <button id="save" onClick={Save}>
              Save
            </button>
          </div>
        </div>

        <Title>
          {" "}
          🚀 Previous Count : <span id="p">0</span>
        </Title>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div``;

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-style: italic;
  letter-spacing: 0.1em;
  margin-top: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 100px;

  button {
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: #f5f5f5;
    font-size: 1.3rem;
    font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.1em;
    cursor: pointer;
  }

  button:hover {
    background-color: #e5e5e5;
  }
`;


const Head = styled.div`
display:flex;
justify-content:center;

`

