import { useRef, useState } from "react";

export function useStateManager<T>(value?: T | undefined) {
  const [privatePrevValue, setPrivatePrevValue] = useState<T | undefined>();
  const privatePrevValueSync = useRef<T | undefined>();

  const [privateValue, setPrivateValue] = useState<T | undefined>(value);
  const privateValueSync = useRef<T | undefined>(value);

  function setState(newValue: T | undefined) {
    privatePrevValueSync.current = privateValueSync.current;
    setPrivatePrevValue(prev => privateValue);

    privateValueSync.current = newValue;
    setPrivateValue(prev => newValue);
  }

  function sync() {
    return {
      statePrev: privatePrevValueSync.current,
      state: privateValueSync.current,
    };
  }

  return {
    state: privateValue,
    statePrev: privatePrevValue,
    sync,

    setState,
  };
}