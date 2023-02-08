import { Escrita, Texto } from "./styled";
import React, { useState, useEffect, useRef } from "react";

const Message = (props) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    setText(props.text);
    if (!text || !isVisible) return;
    let intervalId = setInterval(() => {
      if (index < text.length) {
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [index, text, isVisible]);
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { rootMargin: "0px 0px -20% 0px" }
    );
    if (messageRef.current) observer.observe(messageRef.current);
    return () => observer.disconnect();
  }, [messageRef]);
  return (
    <Escrita ref={messageRef}>
      {text ? (
        <Texto
          fontSize={`${props.fontSize}`}
          alignSelf={`${props.alignSelf}`}
          textAlign={`${props.textAlign}`}
        >
          {text.slice(0, index)}
        </Texto>
      ) : null}
    </Escrita>
  );
};

export default Message;
