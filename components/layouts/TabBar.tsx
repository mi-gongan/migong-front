import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

type menuType = {
  [key: string]: string;
};

const menuData: Array<menuType> = [
  { id: "menu01", name: "얼굴형 진단", path: "/diagnosis" },
  { id: "menu02", name: "컨설팅", path: "/consulting" },
];

const StyledLink = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-evenly;
  a {
    border-bottom: 1px solid;
    line-height: 48px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    opacity: 0.5;
  }
  .click {
    border-bottom: 2px solid;
    font-weight: bold;
    opacity: 1;
  }
`;

function TabBar() {
  const router = useRouter();
  const firstPath = `/${router.pathname.split("/")[1]}`;

  return (
    <StyledLink>
      {menuData.map((menu) => (
        <Link href={menu.path} key={menu.id}>
          <a className={menu.path === firstPath ? "click" : "none"}>
            {menu.name}
          </a>
        </Link>
      ))}
    </StyledLink>
  );
}

export default TabBar;
