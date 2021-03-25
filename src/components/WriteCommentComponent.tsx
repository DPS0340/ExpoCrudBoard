import * as RN from "react-native";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReCommentComponent from "./ReCommentComponent";
import * as Paper from "react-native-paper";
import DeleteCommentComponent from "./DeleteCommentComponent";

export default function WriteCommentComponent(props: {
  pk: number;
  dispatchAction: Function;
  componentName: string;
}) {
  const { pk, dispatchAction, componentName } = props;
  const dispatch = useDispatch();
  const [content, setContent] = React.useState<string>("");
  const onChangeContent = (text: string) => {
    setContent(text);
  };
  React.useEffect(() => {
    setContent("");
  }, [pk]);
  const onWrite = () => {
    dispatch(dispatchAction({ pk, content }));
  };
  return (
    <RN.View>
      <Paper.TextInput
        value={content}
        onChangeText={onChangeContent}
        onSubmitEditing={onWrite}
      />
      <Paper.Button
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        onPress={onWrite}
      >
        Write {componentName}
      </Paper.Button>
    </RN.View>
  );
}
