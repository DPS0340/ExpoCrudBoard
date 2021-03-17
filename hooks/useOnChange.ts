import * as React from 'react';

export type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;
export type parameterType = string
export default function useOnChange(
  setter: Dispatcher<parameterType>,
): (e: parameterType) => void {
  return (e: parameterType): void => {
    setter(e);
  };
}
