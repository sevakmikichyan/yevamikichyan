"use client"

import React from "react";
import type { Props } from "./types";
import { applyTextColor, getResponsiveTextSize } from "@/common/utils";
import classNames from "classnames";
import { useTheme } from "@/context/theme.context";

const Paragraph: React.FC<Props> = ({
  children,
  size = "md",
  color = "theme",
  align = "left",
  useShadow,
  disableSelection = false,
  style,
  className,
  ...rest
}) => {
  const { oppositeTheme} = useTheme();
  const appliedTextColor = applyTextColor(color === "theme" ? oppositeTheme : color);
  const textSize = getResponsiveTextSize(size);

  return (
    <p
      className={classNames(textSize, appliedTextColor, disableSelection ? "select-none" : "", className)}
      style={{
        textAlign: align,
        ...style
      }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
