import { FaRegHandPointer } from "react-icons/fa";
import { LuMousePointer2 } from "react-icons/lu";
import { TbCursorText } from "react-icons/tb";
import { CursorIconTypes, IconStyles } from "../../types";
import React from "react";

/**
 * @description
 * IconStyles interface
 * This interface defines the styles for cursor icons.
 * It includes properties for icon size, border color, and background color.
 */
const defaultCursorIconStyles: IconStyles = {
  iconSize: "20px",
  borderColor: "red",
  bgColor: "black",
}
/**
 * @description
 * CursorIconTypes interface
 * This interface defines the structure for cursor icon definitions.
 * It includes properties for different cursor icons such as 'hand', 'mouse', and 'input'.
 * Each property is a React node representing the cursor icon.
 */
//interface for cursor icon definitions
let initialCursorIcons: CursorIconTypes = {
  hand: <FaRegHandPointer />,
  mouse: <LuMousePointer2 />,
  input: <TbCursorText />,
};

/**
 * @description
 * useChangeIcon hook
 * This hook allows you to change the cursor icons dynamically in a React application.
 * It provides a function to update the cursor icons based on the provided cursor name and React element or node.
 * @returns {function} changeCursor - A function that takes a cursor name and a React element or node to update the cursor icon.
 * @example
 * const changeCursor = useChangeIcon();
 * changeCursor('hand', <NewHandIcon />);
 */

const useChangeIcon = () => {
  
  // State to manage cursor icons and their styles
  const [iconStyles, setIconStyles] = React.useState<IconStyles>(defaultCursorIconStyles);
  const [cursorIcons, setCursorIcons] = React.useState<CursorIconTypes>(() => {
    // Initialize cursor icons with default styles
    const styledIcons: CursorIconTypes = {
      hand: "",
      mouse: "",
      input: ""
    };
    for (const key in initialCursorIcons) {
      if (initialCursorIcons.hasOwnProperty(key)) {
        const icon = initialCursorIcons[key];
        styledIcons[key] = React.cloneElement(icon, {
          style: {
            fontSize: iconStyles.iconSize,
            color: iconStyles.borderColor,
            fill: iconStyles.bgColor,
          },
        });
      }
    }
    return styledIcons;
  });

  /**
   * @description
   * changeCursor function
   * This function allows you to change the cursor icon by providing a cursor name and a React element or node.
   * It updates the state of cursorIcons with the new icon for the specified cursor name.
   * @param cursorName
   * @param icon 
   */
  const changeCursor = (cursorName: keyof CursorIconTypes, icon: React.ReactElement | React.ReactNode) => {
    if(cursorName in cursorIcons && React.isValidElement(icon)) {
      setCursorIcons((prevIcons) => ({
        ...prevIcons,
        [cursorName]: icon,
      }));
    }
    else{
      console.warn(`Cursor name "${cursorName}" is not valid or icon is not a valid React element.`);
    }
  };

  /**
   * @description
   * changeCursorStyles function
   * This function allows you to change the styles of the cursor icons dynamically.
   * 
   * @param iconStyles - An object containing the new styles for the cursor icons.
   * @example
   * changeCursorStyles({
   *   iconSize: "30px",
   *  borderColor: "blue",
   *  bgColor: "white"
   * });
  */
  const changeCursorStyles = (iconStyles: IconStyles) => {
    setIconStyles(iconStyles);
    const updatedCursorIcons: CursorIconTypes = {
      hand: "",
      mouse: "",
      input: ""
    };

    for (const key in cursorIcons) {
      if (cursorIcons.hasOwnProperty(key)) {
        const icon = cursorIcons[key];
        updatedCursorIcons[key] = React.cloneElement(icon, {
          style: {
            fontSize: iconStyles.iconSize,
            color: iconStyles.borderColor,
            fill: iconStyles.bgColor,
          },
        });
      }
    }
    setCursorIcons(updatedCursorIcons);
  }

  return { changeCursor,changeCursorStyles, cursorIcons };
};

export default useChangeIcon;
export { initialCursorIcons, useChangeIcon};
