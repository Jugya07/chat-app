import { useRef } from "react";

function useArrayRef() {
  const letterRef = useRef([]);
  letterRef.current = [];
  return [letterRef, (ref) => ref && letterRef.current.push(ref)];
}

export { useArrayRef };
