import React from "react";

import { DualProps, TextProps } from "./Dual.types";

const Dual: React.FC<DualProps> = (props) => {
  const offset =
    props.offset === "sm"
      ? (props.fontSize * 1) / 40
      : props.offset === "md"
      ? (props.fontSize * 1) / 30
      : (props.fontSize * 1) / 20;

  const Text: React.FC<TextProps> = (props) => {
    return (
      <text
        letterSpacing={props.parent.letterSpacing}
        fontSize={props.parent.fontSize}
        fontFamily={props.parent.fontFamily}
        fontStyle={props.parent.fontStyle}
        fontWeight={props.parent.fontWeight}
        x={props.x}
        y={props.y}
        fill={props.fill}
      >
        {props.parent.content}
      </text>
    );
  };

  const parent = {
    letterSpacing: props.letterSpacing,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    fontStyle: props.fontStyle,
    fontWeight: props.fontWeight,
    content: props.content,
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={props.width}
        height={props.height}
      >
        {props.shadow ? (
          <>
            <Text
              parent={parent}
              x={offset + offset}
              y={props.fontSize + 2 * offset}
              fill={props.color[2]}
            ></Text>
            <Text
              parent={parent}
              x={offset}
              y={props.fontSize}
              fill={props.color[0]}
            ></Text>
            <Text
              parent={parent}
              x={offset}
              y={props.fontSize + offset}
              fill={props.color[1]}
            ></Text>
          </>
        ) : (
          <>
            <Text
              parent={parent}
              x={2 * offset}
              y={props.fontSize + offset}
              fill={props.color[2]}
            ></Text>
            <Text
              parent={parent}
              x={0}
              y={props.fontSize + offset}
              fill={props.color[0]}
            ></Text>
            <Text
              parent={parent}
              x={offset}
              y={props.fontSize + offset}
              fill={props.color[1]}
            ></Text>
          </>
        )}
      </svg>
    </div>
  );
};

export default Dual;
