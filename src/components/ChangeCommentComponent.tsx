import MutatePostScreen from "../screens/MutatePostScreen";
import withDispatchAction from "../screens/withDispatchAction";
import * as React from "react";
import { commentsActions } from "../slices/commentsSlice";

const ChangeCommentComponent = withDispatchAction(
  MutatePostScreen,
  commentsActions.changeComment
);

export default ChangeCommentComponent;
