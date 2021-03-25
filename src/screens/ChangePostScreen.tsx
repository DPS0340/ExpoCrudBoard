import { postsActions } from "../slices/postsSlice";
import MutatePostScreen from "./MutatePostScreen";
import withDispatchAction from "./withDispatchAction";

const ChangePostScreen = withDispatchAction(
  MutatePostScreen,
  postsActions.changePost
);

export default ChangePostScreen;
