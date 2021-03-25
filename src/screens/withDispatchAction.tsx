import * as React from "react";

export default function withDispatchAction(
  WrappedComponent: React.ReactElement,
  dispatchAction: Function
) {
  return function withDispatchAction(props) {
    return <WrappedComponent dispatchAction={dispatchAction} {...props} />;
  };
}
