import { useRef } from 'react';

const useDebounce = () => {
  const timerIdRef = useRef<NodeJS.Timeout>();

  return <F extends (...args: any) => any>(func: F, waitFor: number) => {
    const debounced = (...args: any) => {
      clearTimeout(timerIdRef.current);

      timerIdRef.current = setTimeout(() => func(...args), waitFor);
    };

    return debounced;
  };
};

export default useDebounce;