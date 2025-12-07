// "use client"

// import React from "react";
// import type { SpanProps } from "./types.d";
// import { applyTextColor, colors, getResponsiveTextSize } from "@/common/utils";
// import classNames from "classnames";
// import { useTheme } from "@/context/theme.context";

// type Props = SpanProps & React.HTMLAttributes<HTMLSpanElement>;

// const Span: React.FC<Props> = ({
//   children,
//   size,
//   color = "error",
//   disableSelection = false,
//   style,
//   className,
//   ...rest
// }) => {
//   const { oppositeTheme } = useTheme();
//   const appliedColor = applyTextColor(color === "theme" ? oppositeTheme : color);
//   const textSize = size ? getResponsiveTextSize(size) : "text-inherit";

//   return (
//     <span
//       className={classNames(textSize, "text-error", disableSelection ? "select-none" : "", className)}
//       style={style}
//       {...rest}
//     >
//       {children}
//     </span>
//   );
// };

// export default Span;


"use client"

import React from "react";
import type { Props } from "./types.d";
import { applyTextColor, getResponsiveTextSize } from "@/common/utils";
import classNames from "classnames";
import { useTheme } from "@/context/theme.context";

const Span: React.FC<Props> = ({
  children,
  size,
  color,
  disableSelection = false,
  style,
  className,
  ...rest
}) => {
  const { oppositeTheme } = useTheme();
  const appliedColor = color ?  applyTextColor(color === "theme" ? oppositeTheme : color): color;
  const textSize = size ? getResponsiveTextSize(size) : "";

  return (
    <span
      className={classNames(textSize, appliedColor, disableSelection ? "select-none" : "", className)}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Span;
