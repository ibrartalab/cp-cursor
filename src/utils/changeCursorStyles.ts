import React from "react";
import { CursorIconsTypes, IconsStyles } from "../../types";
import { cursorIcons } from "../components/Cursor";


//Styles for cursor pointers
const cursorIconStyles: IconsStyles =  {
  iconSize:"20px",
  borderColor:"red",
  bgColor:"black"
};



//Function to change Styles of cursor
export const changeCursorStyles = (iconStyles: IconsStyles) => {
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
    // Clone the icon and apply the new styles
    if (!icon) continue; // Skip if icon is not defined
    updatedCursorIcons[key] = React.cloneElement(icon, { style });
  }

};