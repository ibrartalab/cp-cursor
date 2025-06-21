import React, { useEffect, useState } from "react";
import { Position, IconVisibility } from "../../types/index";
import useChangeIcon from "../hooks/useChangeIcon";

/**
 * @description
 * IconVisibility interface
 * This interface defines the visibility styles for cursor icons.
 * It includes properties for visible and hidden states.
 * @typedef {Object} IconVisibility
 * @property {string} visible - The CSS display value for visible icons.
 * @property {string} hidden - The CSS display value for hidden icons.
 */
const { visible, hidden }: IconVisibility = {
  visible: "block",
  hidden: "none",
};

/**
 * @description
 * cursorContainerBaseStyles
 * This constant defines the base styles for the custom cursor container.
 * It includes properties for cursor style, position, z-index, and pointer events.
 * @type {React.CSSProperties}
 * @property {string} cursor - The CSS cursor style for the custom cursor.
 * @property {string} position - The CSS position property for the custom cursor.
 * @property {number} zIndex - The CSS z-index value for the custom cursor.
 * @property {string} pointerEvents - The CSS pointer-events property for the custom cursor.
 * @example
 * const cursorContainerBaseStyles: React.CSSProperties = {
 *   cursor: "none",
 *  position: "fixed",
 *  top: 0,
 * left: 0,
 * zIndex: 9999,
 * pointerEvents: "none",
 */
const cursorContainerBaseStyles: React.CSSProperties = {
  cursor: "none",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  pointerEvents: "none",
};

/**
 * 
 * @returns {JSX.Element}
 * @description
 * Cursor component
 * This component renders a custom cursor that changes its appearance based on the user's interaction with different elements on the page.
 * It listens for mouse events and updates the cursor position and icon visibility accordingly.
 */
const Cursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const { cursorIcons } = useChangeIcon();

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
        ...cursorContainerBaseStyles,
      }}
    >
      {cursorIcons.mouse}
      {cursorIcons.input}
      {cursorIcons.hand}
    </div>
  );
};
export { Cursor };
