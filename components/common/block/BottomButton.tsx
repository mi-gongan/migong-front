import React from "react";
import styled from "styled-components";

interface ButtonText {
  text: string;
  onClick: () => void;
}

function BottomButton({ text, onClick }: ButtonText) {
  return (
    <ButtonWrap>
      <button onClick={onClick}>{text}</button>
    </ButtonWrap>
  );
}

export default BottomButton;

const ButtonWrap = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  height: 80px;
  line-height: 80px;
  button {
    width: 70%;
    padding: 10px;
    margin: 0px;
    border: none;
    border-radius: 5px;
    height: 55px;
    background-color: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
`;
