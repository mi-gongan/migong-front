import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectFaceShape, setReset } from "../../../store/slices/faceDataSlice";
import { useDispatch } from "react-redux";
import MainSize from "../blocks/MainSize";
import BottomButton from "../../common/block/BottomButton";
import { useRouter } from "next/router";

function ResultTemplate() {
  const router = useRouter();

  const faceShape = useAppSelector(selectFaceShape);
  const dispatch = useDispatch();

  const imgUrl = `/assets/imgs/faceImgs/${faceShape}.png`;

  const handleReset = () => {
    dispatch(setReset());
    router.push("/diagnosis");
  };
  return (
    <>
      <Text>얼굴형 진단서</Text>
      <ImgWrap>
        <Image
          alt="face-shape"
          src={imgUrl}
          width="300px"
          height="200px"
        ></Image>
      </ImgWrap>
      <Text>주요 크기</Text>
      <MainSize></MainSize>
      <BottomButton
        text="다시 진단하기 👈"
        onClick={handleReset}
      ></BottomButton>
    </>
  );
}
export default ResultTemplate;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-top: 30px;
  margin-left: 50px;
`;

const ImgWrap = styled.div`
  text-align: center;
  margin-top: 10px;
`;
