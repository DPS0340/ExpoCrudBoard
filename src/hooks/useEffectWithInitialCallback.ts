import * as React from "react";

export default function useEffectWithInitialCallback(
  initialCallback: () => void,
  callback: () => void,
  listeners: any[] = [],
  returnAfterInitialCallback: boolean = true
): void {
  const [onEnter, setOnEnter] = React.useState(true);
  React.useEffect(() => {
    if (onEnter) {
      initialCallback();
      setOnEnter(false);
      if (returnAfterInitialCallback) {
        return;
      }
    }
    callback();
  }, [...listeners]);
}
