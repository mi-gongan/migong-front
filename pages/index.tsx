import type { NextPage } from "next";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectIsDone } from "../store/slices/faceDataSlice";

//이 페이지를 스플레쉬 화면으로 구성

const Home: NextPage = () => {
  const router = useRouter();
  const [fadeout, setFadeout] = useState(false);

  const isDone = useAppSelector(selectIsDone);

  //글자가 점점 뚜렷해지는 이팩트
  useEffect(() => {
    setTimeout(() => {
      setFadeout(true);
    }, 700);
    setTimeout(() => {
      console.log(isDone);
      isDone === "Done" ? router.push("/result") : router.push("/diagnosis");
    }, 3000);
  }, [router, isDone]);

  return (
    <Screen>
      <div>
        <p className="title">migong</p>
        <p className="subtitle">미를 찾는 공간</p>
        <p className={fadeout ? "notblur" : "blur"}>
          자신만의 아름다움을 찾아가세요
        </p>
      </div>
    </Screen>
  );
};

export default Home;

const Screen = styled.div`
  position: fixed;
  top: 0px;
  height: 100vh;
  min-width: 500px;
  text-align: center;
  background-color: black;
  color: white;
  padding-top: 200px;
  .title {
    font-weight: 700;
    font-size: 44px;
  }
  .subtitle {
    font-weight: 600;
    font-size: 18px;
  }
  .blur {
    margin-top: 180px;
    font-weight: 400;
    line-height: 23px;
    -webkit-filter: blur(2px);
    filter: blur(2px);
  }
  .notblur {
    margin-top: 180px;
    font-weight: 400;
    line-height: 23px;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
`;
