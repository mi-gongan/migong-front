import React from "react";
import styled from "styled-components";
type facePercentType = {
  facePercent: number;
};
function PercentBar({ facePercent }: facePercentType) {
  return (
    <Wrap>
      <Bar percent={facePercent}></Bar>
    </Wrap>
  );
}

export default PercentBar;

const Wrap = styled.div`
  width: 100%;
  height: 10px;
  border: 1px #a9a9a9 solid;
  border-radius: 7px;
`;

const Bar = styled.div<{ percent: number }>`
  width: ${(props) => props.percent}%;
  height: 100%;
  background-color: black;
  border: none;
  border-radius: 7px;
`;
