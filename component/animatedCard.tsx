// components/ScrollAnimation.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import "./animatedCard.scss";

const ScrollAnimation = (
  // { children }: { children?: React.ReactNode },
  props: { class?: string; children?: React.ReactNode }
) => {
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
      // observer.unobserve(myRef.current);
    };
  }, []);
  return (
    <div
      //@ts-ignore

      ref={myRef}
      className={`${props.class ? props.class : "card"} ${
        isVisible ? "visible" : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default ScrollAnimation;
