import { useRef } from "react";
function useCustomUseEffect(fn, deps) {
  const firstTimeRef = useRef(true);
  const cacheDepsRef = useRef([]);

  if (firstTimeRef.current) {
    firstTimeRef.current = false;
    fn();
    return;
  }
  // comparing previous deps with current deps
  console.log(JSON.stringify(deps));
  console.log(JSON.stringify(cacheDepsRef.current));

  if (JSON.stringify(deps) !== JSON.stringify(cacheDepsRef.current)) {
    console.log("Not Matched");
    fn();
  }
  // execute on every render
  if (!deps) {
    fn();
  }
  cacheDepsRef.current = deps ? deps : [];
}

export default useCustomUseEffect;
