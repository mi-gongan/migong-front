import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import {
  selectIsDone,
  selectFaceSize,
  setFaceSize,
  setIsDone,
} from "../../store/faceData/faceDataSlice";
import Loading from "../common/Loading";

function HomeTemplate() {
  const [image, setImage] = useState(null);
  const [upload, setUpload] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isDone = useAppSelector(selectIsDone);
  const faceSize = useAppSelector(selectFaceSize);
  const dispatch = useAppDispatch();

  //button통해서 input창 클릭되도록 하는 함수
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

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

  const convertImageToBase64 = useCallback((file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }, []);

  const sendImageToServer = useCallback(async () => {
    const base64: any = await convertImageToBase64(image);
    const data = [{ image: base64.split(",")[1] }];
    try {
      //@ts-ignore
      const response = await axios({
        url: "https://hanjoongyoo.pythonanywhere.com/dlib/test",
        method: "POST",
        data,
        contentType: "application/json; charset=UTF-8",
      });
      const fetchData = response.data;
      dispatch(setFaceSize(fetchData));
      dispatch(setIsDone("Done"));
    } catch (error) {
      console.log(error);
      alert("사진을 다시 찍어주세요");
      setUpload("");
    }
  }, [image, convertImageToBase64, dispatch]);

  //의존성 배열을 통해 이미지 업로드되면 서버로 보내는 사이드이팩트
  useEffect(() => {
    if (image) {
      sendImageToServer();
    }
  }, [image, sendImageToServer]);

  return (
    <>
      {!upload ? (
        <>
          <button onClick={handleClick}>얼굴형 진단서 받기 👉</button>
          <input
            type="file"
            accept="image/*"
            onChange={saveImage}
            ref={inputRef}
            style={{ display: "none" }}
          />
        </>
      ) : !isDone ? (
        <Loading text="진단중입니다"></Loading>
      ) : (
        <>sf</>
      )}
    </>
  );
}

export default HomeTemplate;
