import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import Responsive from "../components/ResponsiveComponent";
import * as RN from "react-native";
import styles from "../styles/common";
import Quill from "quill";
import styled from "styled-components/native";
import * as Paper from "react-native-paper";

const EditorBlock = styled(Responsive)`
  /* 페이지 위 아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.TextInput`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 0;
  }
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
  width: 100%;
`;
const QuillWrapper = styled.View`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    margin-bottom: -5.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
      padding-left: 0.5rem;
      padding-top: 1rem;
      z-index: 1;
    }
    line-height: 1.5;
    border-bottom: 1px solid gray;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

export default function WritePostScreen(props: {
  navigation: StackNavigationHelpers;
}): React.ReactElement {
  const quillInstance = React.useRef(null); // Quill 인스턴스를 설정
  const quillElement = React.useRef(null); // Quill을 적용할 DivElement를 설정
  const placeHolder = "Write your thoughts..";
  const [content, setContent] = React.useState({ title: "", content: "" });
  React.useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: " 내용을 작성하세요...",
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        setContent({ ...content, content: quill.root.innerHTML });
      }
    });
  }, []);
  const onChangeTitle = (e) => {
    setContent({ ...content, title: e.target.value });
  };

  const onWriteClicked = () => {
    alert("TODO");
    // dispatch TODO
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="&nbsp;제목을 입력하세요"
        onChange={onChangeTitle}
        value={content.title}
      />
      <RN.View>
        <QuillWrapper ref={quillElement} />
        <Paper.Button mode="contained" onPress={onWriteClicked}>
          Write
        </Paper.Button>
      </RN.View>
    </EditorBlock>
  );
}
