import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import * as React from "react";
import Responsive from "../components/ResponsiveComponent";
import * as RN from "react-native";
import * as Paper from "react-native-paper";

export default function WritePostScreen(props: {
  navigation: StackNavigationHelpers;
}): React.ReactElement {
  const [content, setContent] = React.useState({ title: "", content: "" });
  const onChangeTitle = (e: any) => {
    setContent({ ...content, title: e.target.value });
  };
  const onChangeContent = (e: any) => {
    setContent({ ...content, content: e.target.value });
  };

  const onWriteClicked = () => {
    alert("TODO");
    // dispatch TODO
  };

  return (
    <Responsive>
      <Paper.TextInput
        placeholder="&nbsp;제목을 입력하세요"
        onChange={onChangeTitle}
        value={content.title}
      />
      <RN.View>
        <Paper.TextInput
          placeholder="&nbsp;제목을 입력하세요"
          onChange={onChangeContent}
          value={content.content}
        />
        <Paper.Button mode="contained" onPress={onWriteClicked}>
          Write
        </Paper.Button>
      </RN.View>
    </Responsive>
  );
}
