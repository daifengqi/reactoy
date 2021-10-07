type ColorArray = [string, string, string];
type Offset = "sm" | "md" | "lg";

export interface DualProps {
  content: string;
  height: number;
  width: number;
  color: ColorArray;
  fontSize: number;
  fontFamily: string;
  fontStyle: string;
  fontWeight: string;
  letterSpacing: number;
  offset: Offset;
  shadow?: boolean;
}

interface ParentProps {
  letterSpacing: number;
  fontSize: number;
  fontFamily: string;
  fontStyle: string;
  fontWeight: string;
  content: string;
}

export interface TextProps {
  x: number;
  y: number;
  fill: string;
  parent: ParentProps;
}
