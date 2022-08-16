import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";

interface LoadingText {
  text: string;
}

function Loading({ text }: LoadingText) {
  return (
    <Wrap>
      <div className="image-wrapper">
        <Image
          alt="loading"
          src="/assets/imgs/loading.png"
          width={100}
          height={100}
        />
      </div>
      <div className="loading-text">{text}</div>
      <div className="wait-text">기다려주세요</div>
    </Wrap>
  );
}

export default Loading;

const rotator = keyframes`
  0% {
    -webkit-transform: rotate(-45deg) translateZ(0);
    transform: rotate(-45deg) translateZ(0);
  }
  100% {
    -webkit-transform: rotate(315deg) translateZ(0);
    transform: rotate(315deg) translateZ(0);
  }
`;

const Wrap = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .image-wrapper {
    animation-name: ${rotator};
    animation-iteration-count: infinite;
    animation-duration: 3s;
  }
  .loading-text {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 17px;
  }
  .wait-text {
    font-size: 14px;
  }
`;
