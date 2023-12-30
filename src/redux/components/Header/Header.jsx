import React from "react";
import { StyledHeader, StyledP } from "./styles";

/**
 * 컴포넌트 개요 : 앱 전체에서 Header의 역할을 하는 영역
 * 2022.12.16 : 최초 작성
 *
 * @returns Header 컴포넌트
 */
function Header() {
  return (
    <StyledHeader>
      <StyledP>My Todo List</StyledP>
      <StyledP>React</StyledP>
    </StyledHeader>
  );
}

export default Header;
