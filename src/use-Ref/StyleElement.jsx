import { React, useRef, useEffect } from "react";

export const StyleElement = () => {
  const colourParagraph = useRef(null);
  const colors = [
    "#d529d0",
    "#03a9f4",
    "#d14614fa",
    "#d51858",
    "#9c27b0",
    "#ffc107",
    "#ff5722",
    "#61dafb",
    "#4caf50",
    "#07600a",
    "#65e96a",
  ];

  const stylePara = () => {
    const randomClourChanger = Math.floor(Math.random() * colors.length);
    colourParagraph.current.style.color = colors[randomClourChanger];
  };

  return (
    <div className="mainContainer">
      <div className="contentContainer">
        <button
          className="button"
          onClick={() => {
            stylePara();
          }}
        >
          Click me
        </button>
        <p ref={colourParagraph}>
          This is a sample paragraph used for use ref coding
        </p>
      </div>
    </div>
  );
};
