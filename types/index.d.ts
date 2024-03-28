import { IconType } from "react-icons";

// Interface for cursor position
interface Position {
  x: number;
  y: number;
}

// Interface for cursor icon definitions
interface CursorIconsTypes {
  hand: JSX.Element;
  mouse: JSX.Element;
  text: JSX.Element;
}
//interface for visible and hidden of cursor icons
interface iconVisibility {
  visible: string;
  hidden: string;
}
interface UseCursorProps {
  data: Object;
}

interface IconsStyles{
  iconSize:string;
  borderColor:string;
  bgColor:string;
}

export { Position, CursorIconsTypes, iconVisibility, UseCursorProps ,IconsStyles};
