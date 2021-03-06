import React, { useState } from "react";
import styled from "styled-components";

function FAQ({ question, answer }) {
  const [showAnswer, setShowAnser] = useState(false);

  return (
    <FaqStyle>
      <div>
        <li>
          <h5>{question}</h5>
          <button
            onClick={() => {
              setShowAnser(!showAnswer);
            }}
          >
            btn
          </button>
        </li>
        <p>{showAnswer ? answer : " "}</p>
      </div>
    </FaqStyle>
  );
}

const FaqStyle = styled.div`
  border: solid black 1px;
  border-radius: 10px;
  width: 700px;

  margin: 0.5rem;
  min-height: 3rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  h5 {
    margin-left: 0.5rem;
  }
  button {
    height: 100%;
    width: 10%;
    margin-left: auto;
    margin-right: 2rem;
  }
`;

export default FAQ;
