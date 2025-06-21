import { JSX } from "react";
import { IconType } from "react-icons";

// Interface for cursor position
type Position = {x: number; y: number;};
type IconVisibility = { visible: string; hidden: string; };

// Interface for cursor icon definitions
interface CursorIconTypes {
  hand: React.ReactNode | React.JSX.Element;
  mouse: React.ReactNode | React.JSX.Elementt;
  input: React.ReactNode | React.JSX.Elementt;
}

interface IconStyles{
  iconSize:string;
  borderColor:string;
  bgColor:string;
}

export { Position, CursorIconTypes, IconVisibility ,IconStyles};
