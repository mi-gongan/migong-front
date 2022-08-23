import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectFaceSize } from "../../../store/slices/faceDataSlice";
import { facePercentCalc } from "../../../utils/faceUtils";

function MainSize() {
  const faceSize = useAppSelector(selectFaceSize);
  const faceSizePercent = facePercentCalc(faceSize);
  const aspect = faceSizePercent.aspectPercent;
  const cheek = faceSizePercent.cheekPercent;
  const jaw = faceSizePercent.jawPercent;
  return (
    <Wrap>
      <SizeBoxWrap>
        <div className="name">얼굴길이</div>
        <PercentWrap>
          <PercentText>{aspect}</PercentText>
          <PercentBar>
            <Bar percent={aspect}></Bar>
          </PercentBar>
        </PercentWrap>
        <div className="is-or-not">{aspect > 50 ? "긴" : "짧은"}</div>
      </SizeBoxWrap>
      <SizeBoxWrap>
        <div className="name">광대</div>
        <PercentWrap>
          <PercentText>{cheek}</PercentText>
          <PercentBar>
            <Bar percent={cheek}></Bar>
          </PercentBar>
        </PercentWrap>
        <div className="is-or-not">{cheek > 50 ? "있음" : "없음"}</div>
      </SizeBoxWrap>
      <SizeBoxWrap>
        <div className="name">턱</div>
        <PercentWrap>
          <PercentText>{jaw}</PercentText>
          <PercentBar>
            <Bar percent={jaw}></Bar>
          </PercentBar>
        </PercentWrap>
        <div className="is-or-not">{jaw > 50 ? "있음" : "없음"}</div>
      </SizeBoxWrap>

      {/* <PercentBar>
        <Bar percent={faceSizePercent.cheekPercent}></Bar>
      </PercentBar>
      <PercentBar>
        <Bar percent={faceSizePercent.jawPercent}></Bar>
      </PercentBar> */}
    </Wrap>
  );
}

export default MainSize;

const Wrap = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 39px 3px rgba(0, 0, 0, 0.09);
  border-radius: 22px;
  height: 270px;
  margin: 20px 30px;
  padding-top: 10px;
`;
const SizeBoxWrap = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 70px;
  font-size: 14px;
  color: #747474;
  display: flex;
  justify-content: center;
  .name {
    width: 60px;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
  }
  .is-or-not {
    width: 60px;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
  }
`;

const PercentWrap = styled.div`
  display: block;
  position: relative;
  width: 60%;
  // left: 50%;
  // transform: translateX(-50%);
`;

const PercentText = styled.div<{ children: number }>`
  position: absolute;
  top: 10px;
  left: ${(props) => props.children}%;
  transform: translateX(-50%);
`;

const PercentBar = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  top: 35px;
  border: 1px #a9a9a9 solid;
  border-radius: 7px;
`;

const Bar = styled.div<{ percent: number }>`
  position: absolute;
  width: ${(props) => props.percent}%;
  height: 100%;
  background-color: black;
  border: none;
  border-radius: 7px;
`;
