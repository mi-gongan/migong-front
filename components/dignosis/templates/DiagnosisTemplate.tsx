import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  setFaceSize,
  setFaceShape,
  setIsDone,
  selectIsDone,
} from "../../../store/slices/faceDataSlice";
import { faceShapeText } from "../../../utils/faceUtils";
import { convertImageToBase64 } from "../../../utils/faceUtils";

import Loading from "../../common/Loading";
import InputButton from "../blocks/InputButton";

function DiagnosisTemplate() {
  const [image, setImage] = useState(null);
  const [upload, setUpload] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const isDone = useAppSelector(selectIsDone);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isDone === "Done") {
      router.push("/diagnosis/result");
    }
  }, [isDone, router]);

  //button통해서 input창 클릭되도록 하는 함수
  const handleClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const saveImage = useCallback((e: any) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setUpload("Done");
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);
    } else {
      alert("사진을 다시 찍어주세요");
      setUpload("");
    }
  }, []);

  const sendImageToServer = useCallback(async () => {
    const base64: any = await convertImageToBase64(image);
    const data = [{ image: base64.split(",")[1] }];
    try {
      //@ts-ignore
      const response = await axios({
        url: process.env.NEXT_PUBLIC_API_URL,
        method: "POST",
        data,
        contentType: "application/json; charset=UTF-8",
      });
      const fetchData = response.data;
      dispatch(setFaceSize(fetchData));
      dispatch(setFaceShape(faceShapeText(fetchData)));
      dispatch(setIsDone("Done"));
      router.push("/diagnosis/result");
      setUpload("");
    } catch (error) {
      console.log(error);
      alert("사진을 다시 찍어주세요");
      setUpload("");
    }
  }, [image, dispatch, router]);

  //의존성 배열을 통해 이미지 업로드되면 서버로 보내는 사이드이팩트
  useEffect(() => {
    if (image) {
      sendImageToServer();
    }
  }, [image, sendImageToServer]);

  return (
    <>
      {!upload ? (
        <Wrap>
          <ButtonWrap>
            <InputButton
              handleClick={handleClick}
              saveImage={saveImage}
              inputRef={inputRef}
            ></InputButton>
          </ButtonWrap>
        </Wrap>
      ) : (
        <Loading text="진단중입니다"></Loading>
      )}
    </>
  );
}

export default DiagnosisTemplate;

const Wrap = styled.div`
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
`;

const ButtonWrap = styled.div`
  margin-top: auto;
`;
