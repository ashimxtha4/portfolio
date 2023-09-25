// components/ScrollAnimation.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import "./animatedCard.scss";

const ScrollAnimation = ({ children }: { children?: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = useRef();
  // console.log(isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      console.log("entry", entry);
      if (entry[0].isIntersecting) {
        setIsVisible(() => true);
        //@ts-ignore
        observer.observe(myRef.current);
      }
    });
    if (!isVisible) {
      //@ts-ignore
      observer.observe(myRef.current);
    }

    return () => {
      //@ts-ignore
      observer.unobserve(myRef.current);
    };
  }, []);
  return (
    //@ts-ignore
    <div ref={myRef} className={`card ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
