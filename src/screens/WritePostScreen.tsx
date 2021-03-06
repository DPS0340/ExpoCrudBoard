import { postsActions } from "../slices/postsSlice";
import MutatePostScreen from "./MutatePostScreen";
import withDispatchAction from "./withDispatchAction";
import * as React from "react";

const WritePostScreen = withDispatchAction(
  MutatePostScreen,
  postsActions.writePost
);

export default WritePostScreen;
