import React from "react";
import Image from "next/image";
import { useAppSelector } from "../../hooks/reduxHooks";
import {
  selectFaceSize,
  selectFaceShape,
  setFaceSize,
  setFaceShape,
  setReset,
  selectIsDone,
} from "../../store/faceData/faceDataSlice";
import BottomButton from "../common/BottomButton";
import { useDispatch } from "react-redux";
import { facePercentCalc, faceTextConvert } from "../../utils/faceUtils";
import PercentBar from "./PercentBar";

function Result() {
  const faceSize = useAppSelector(selectFaceSize);
  const faceShape = useAppSelector(selectFaceShape);
  const isDone = useAppSelector(selectIsDone);
  const dispatch = useDispatch();

  const faceShapeText = faceTextConvert(faceShape);
  const faceSizePercent = facePercentCalc(faceSize);
  const imgUrl = `/assets/imgs/faceImgs/${faceShape}.png`;

  const handleReset = () => {
    dispatch(setReset());
    console.log(isDone);
  };
  return (
    <>
      <Image alt="face-shape" src={imgUrl} width="300" height="200"></Image>
      {faceShapeText}
      <BottomButton
        text="다시 진단하기 👈"
        onClick={handleReset}
      ></BottomButton>
      <PercentBar facePercent={faceSizePercent.aspectPercent}></PercentBar>
    </>
  );
}
export default Result;
