import { useEffect, useRef } from "react";

const useListener = (outsideFunction: () => void) => {
  const childRef = useRef<null | any>();
  const parentRef = useRef<null | any>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        (childRef.current && childRef.current.contains(event.target)) ||
        (parentRef.current && parentRef.current.contains(event.target))
      ) {
        return;
      }
      outsideFunction();
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [outsideFunction]);

  return { childRef, parentRef };
};

export default useListener;
