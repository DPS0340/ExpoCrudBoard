import MutatePostScreen from "../screens/MutatePostScreen";
import withDispatchAction from "../screens/withDispatchAction";
import { commentsActions } from "../slices/commentsSlice";

const ChangeReCommentComponent = withDispatchAction(
  MutatePostScreen,
  commentsActions.changeReComment
);

export default ChangeReCommentComponent;
