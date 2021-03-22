import * as React from "react";

export default function useEffectWithInitialCallback(
  initialCallback: () => void,
  callback: () => void,
  listeners: any[]
) {
  const [onEnter, setOnEnter] = React.useState(true);
  React.useEffect(() => {
    if (onEnter) {
      initialCallback();
      setOnEnter(false);
      return;
    }
    callback();
  }, [...listeners]);
}
