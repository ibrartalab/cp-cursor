import { useEffect, useState } from "react";
import { LuMousePointer2 } from "react-icons/lu";
import { FaRegHandPointer } from "react-icons/fa";
import { TbCursorText } from "react-icons/tb";

//default cursor styles
let cursorStyles = {
  cursor: "none",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  pointerEvents: "none",
};

//freeze the object properties
Object.defineProperties(cursorStyles, {
  cursor: { writable: false, enumerable: true, configurable: false },
  position: { writable: false, enumerable: true, configurable: false },
  top: { writable: false, enumerable: true, configurable: false },
  left: { writable: false, enumerable: true, configurable: false },
  zIndex: { writable: false, enumerable: true, configurable: false },
  pointerEvents: { writable: false, enumerable: true, configurable: false },
});

//pointers icons
// Default  Icons: FaHandPointer, LuMousePointer2, TbCursorText
export const cursorIcons = {
  hand: <FaRegHandPointer />,
  mouse: <LuMousePointer2 />,
  text: <TbCursorText />,
};

//Icons Styles
export const iconStyles = {
  iconSize: "20px",
  iconBorderColor: "black",
  iconBgColor: "black",
};

export function OwnPointers() {
    
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursor = "none";
  let body = document.querySelector("html");
  body.style.cursor = cursor;

  useEffect(() => {
    const cursorMove = document.querySelector(".cursor-box");
    const children = cursorMove.children;
    const icons = Array.from(children);

    //Icon Styles applied
    icons.forEach((icon) => {
      icon.style.fontSize = iconStyles.iconSize;
      icon.style.fill = iconStyles.iconBgColor;
    });

    //Cursor Width and Height Calculation for centering the cursor
    const w = cursorMove.clientWidth / 2;
    const h = cursorMove.clientHeight / 2;

    children[0].style.display = "none";
    children[1].style.display = "none";
    children[2].style.display = "none";

    //Mouse Enter Event
    const mouseEnter = () => {
      children[0].style.display = "block";
    };

    const mouseMove = (e) => {
      setPosition({ x: e.clientX - w, y: e.clientY - h });
    };
    //Mouse Over Event
    const mouseOver = (e) => {
      switch (e.target.tagName) {
        case "A":
          children[0].style.display = "none";
          children[1].style.display = "none";
          children[2].style.display = "block";
          break;
        case "BUTTON":
          children[0].style.display = "none";
          children[1].style.display = "none";
          children[2].style.display = "block";
          break;
        case "INPUT":
          children[0].style.display = "none";
          children[1].style.display = "block";
          children[2].style.display = "none";

          break;
        default:
          children[0].style.display = "block";
          children[1].style.display = "none";
          children[2].style.display = "none";
          break;
      }
      e.target.style.cursor = cursor;
    };
    //Mouse Out Event
    const mouseOut = () => {
      children[0].style.display = "block";
      children[1].style.display = "none";
      children[2].style.display = "none";
    };

    //Mouse Leave Event
    const mouseLeave = () => {
      children[0].style.display = "none";
    };

    //Event Listeners
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", mouseOver);
    document.addEventListener("mouseout", mouseOut);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);
    return () => {
      //Remove Event Listeners
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", mouseOver);
      document.removeEventListener("mouseout", mouseOut);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div
      className="cursor-box"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        ...cursorStyles,
      }}
    >
      {cursorIcons.mouse}
      {cursorIcons.text}
      {cursorIcons.hand}
    </div>
  );
}

