/*
 * https://github.com/Front-end-PJ/Forum_Front_End/blob/main/src/components/common/Responsive.js
 * 동현님 코드 가져와서 수정하였음을 알립니다
 */

import * as React from "react";
import styled from "styled-components/native";

const ResponsiveBlock = styled.View`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto; /* 중앙 정렬 */
  /* 브라우저 크기에 따라 가로 사이즈 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

function Responsive(props: {
  children: React.ReactElement[] | React.ReactElement;
}): React.ReactElement {
  const { children, ...rest } = props;
  React.useEffect(() => console.log({ children, rest }), [children, rest]);
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

export default Responsive;
