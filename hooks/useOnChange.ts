import * as React from 'react';
import * as RN from 'react-native';

export type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;
export type parameterType = RN.NativeSyntheticEvent<RN.TextInputChangeEventData>;
export default function useOnChange(
  setter: Dispatcher<string>,
): (e: parameterType) => void {
  return (e: parameterType): void => {
    setter(e);
  };
}
