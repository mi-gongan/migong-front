import React from "react";
import BottomButton from "../../common/block/BottomButton";

interface DiagnosisPropsType {
  handleClick: () => void;
  saveImage: (e: any) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

function InputButton({ handleClick, saveImage, inputRef }: DiagnosisPropsType) {
  return (
    <>
      <BottomButton
        text="얼굴형 진단서 받기 👉"
        onClick={handleClick}
      ></BottomButton>
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        ref={inputRef}
        style={{ display: "none" }}
      />
    </>
  );
}

export default InputButton;
