/*
 * https://github.com/Front-end-PJ/Forum_Front_End/blob/main/src/components/common/Responsive.js
 * 동현님 코드 가져와서 수정하였음을 알립니다
 */

import * as React from "react";
import styled from "styled-components/native";
import * as RN from "react-native";
import px2vw from "../utils/px2vw";

const ResponsiveBlock = styled.View`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5% 10%;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  @media (max-width: 1024px) {
    margin: 5% 0;
  }
`;

function Responsive(props: {
  children: React.ReactElement[] | React.ReactElement;
}): React.ReactElement {
  const { children, ...rest } = props;
  React.useEffect(() => console.log({ children, rest }), [children, rest]);
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  const Block = RN.Platform.OS === "web" ? ResponsiveBlock : RN.View;
  return <Block {...rest}>{children}</Block>;
}

export default Responsive;
