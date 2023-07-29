import { useRef } from "react";

const useArrayRef = () => {
  const letterRef = useRef([]);
  letterRef.current = [];
  return [letterRef, (ref) => ref && letterRef.current.push(ref)];
};

export { useArrayRef };
