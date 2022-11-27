import { useRef, useState, useEffect } from "react";

const useElementOnScreen = (options) => {
  const elementRef = useRef();
  const [isOnScreen, setIsOnScreen] = useState(false);
  const callbackFuntion = (entries) => {
    const [entry] = entries;
    setIsOnScreen(entry.isIntersecting);
    console.log("dsfsdfsdf")
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFuntion, options);
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, options]);
  return { elementRef, isOnScreen };
};

export default useElementOnScreen;
