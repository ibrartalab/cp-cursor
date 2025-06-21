import { JSX } from "react";
import { IconType } from "react-icons";

// Interface for cursor position
type Position = {x: number; y: number;};
type IconVisibility = { visible: string; hidden: string; };

// Interface for cursor icon definitions
interface CursorIconTypes {
  hand: React.ReactNode;
  mouse: React.ReactNode;
  input: React.ReactNode;
}

interface IconStyles{
  iconSize:string;
  borderColor:string;
  bgColor:string;
}

export { Position, CursorIconTypes, IconVisibility ,IconStyles};
