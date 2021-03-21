import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import Responsive from "../components/ResponsiveComponent";
import * as RN from "react-native";
import styles from "../styles/common";

export default function WritePostScreen(props: {
  navigation: StackNavigationHelpers;
}): React.ReactElement {
  const placeHolder = "Write your thoughts..";
  const editorRef = React.useRef(null);
  const [content, setContent] = React.useState("");
  return (
    <Responsive>
      <RichToolbar editor={editorRef} />
      <RichEditor
        initialFocus={true}
        ref={editorRef}
        placeholder={placeHolder}
        style={styles.editContainer}
        editorStyle={{
          color: "#000",
          placeholderColor: "gray",
          contentCSSText: "font-size: 18px; line-height: 22px;",
        }}
        onChange={(text) => setContent(text)}
      />
    </Responsive>
  );
}
