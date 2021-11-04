import { useEffect, useRef } from "react";

const useListener = (outsideFunction: () => void) => {
  const ref = useRef<null | any>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      outsideFunction();
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [outsideFunction]);

  return ref;
};

export default useListener;
