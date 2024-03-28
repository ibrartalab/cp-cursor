import React, { useEffect, useState } from "react";
import { FaRegHandPointer } from "react-icons/fa";
import { LuMousePointer2 } from "react-icons/lu";
import { TbCursorText } from "react-icons/tb";
import {CursorIconsTypes, Position, iconVisibility,IconsStyles } from "../../types/index";

// Dynamic cursor icons visibility
const { visible, hidden }: iconVisibility = {
  visible: "block",
  hidden: "none",
};

// cursorStyles object
const cursorStyles: React.CSSProperties = {
  cursor: "none",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  pointerEvents: "none",
};

//Styles for cursor pointers
const cursorIconStyles: IconsStyles =  {
  iconSize:"20px",
  borderColor:"red",
  bgColor:"black"
};

//Icons for cursor
let cursorIcons: CursorIconsTypes = {
  hand: <FaRegHandPointer />,
  mouse: <LuMousePointer2 />,
  input: <TbCursorText />,
};

//Function to change Styles of cursor
const changeCursorStyles = (iconStyles: IconsStyles) => {
  const updatedCursorIcons = {} as CursorIconsTypes;

  for (let key in cursorIcons) {
    const icon = cursorIcons[key];
    const style = !iconStyles
      ? {
          fontSize: cursorIconStyles.iconSize,
          color: cursorIconStyles.borderColor,
          fill: cursorIconStyles.bgColor,
        }
      : {
          fontSize: iconStyles.iconSize,
          color: iconStyles.borderColor,
          fill: iconStyles.bgColor,
        };

    updatedCursorIcons[key] = React.cloneElement(icon, { style });
  }

  cursorIcons = updatedCursorIcons;
};

//Function to change cursor
const changeCursor = (cursorName: string, icon: HTMLElement) => {
  let newIcons = { ...cursorIcons };
  if (cursorName in newIcons) {
    newIcons[cursorName] = icon;
    cursorIcons = newIcons;
  }
};

//Custom cursor component
const CPCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const cursorBox = document.querySelector(".cursor-box");
    if (!cursorBox) return;
    const children = cursorBox.children;
    const icons = Array.from(children) as HTMLElement[];

    const w = cursorBox.clientWidth / 2;
    const h = cursorBox.clientHeight / 2;

    icons.forEach((icon) => {
      icon.style.display = hidden;
    });

    const mouseEnter = () => {
      icons[0].style.display = visible;
    };

    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - w, y: e.clientY - h });
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      switch (target.tagName) {
        case "A":
        case "BUTTON":
          icons[0].style.display = hidden;
          icons[1].style.display = hidden;
          icons[2].style.display = visible;
          break;
        case "INPUT":
          icons[0].style.display = hidden;
          icons[1].style.display = visible;
          icons[2].style.display = hidden;
          break;
        default:
          icons[0].style.display = visible;
          icons[1].style.display = hidden;
          icons[2].style.display = hidden;
          break;
      }
      target.style.cursor = hidden;
    };

    const mouseOut = () => {
      icons[0].style.display = visible;
      icons[1].style.display = hidden;
      icons[2].style.display = hidden;
    };

    const mouseLeave = () => {
      icons[0].style.display = hidden;
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", mouseOver);
    document.addEventListener("mouseout", mouseOut);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    return () => {
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
      {cursorIcons.input}
      {cursorIcons.hand}
    </div>
  );
};
export { CPCursor, changeCursor,changeCursorStyles};
