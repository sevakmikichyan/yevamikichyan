"use client"

import React from "react";
import type { Props } from "./types";
import { applyTextColor, getResponsiveTextSize } from "@/common/utils";
import classNames from "classnames";
import { useTheme } from "@/context/theme.context";

const Title: React.FC<Props> = ({
  children,
  heading,
  color = "theme",
  align = "left",
  useShadow,
  disableSelection = false,
  style,
  className,
  ...rest
}) => {
  const { oppositeTheme } = useTheme();
  const appliedTextColor = applyTextColor(color === "theme" ? oppositeTheme : color);
  let textSize;
  switch (heading) {
    case 1:
      textSize = getResponsiveTextSize("2xl");
      break;
    case 2:
      textSize = getResponsiveTextSize("xl");
      break;
    case 3:
      textSize = getResponsiveTextSize("lg");
      break;
    case 4:
      textSize = getResponsiveTextSize("md");
      break;
    case 5:
      textSize = getResponsiveTextSize("sm");
      break;
    case 6:
      textSize = getResponsiveTextSize("xs");
      break;
    default:
      textSize = getResponsiveTextSize("md");
  }

  return React.createElement(
    `h${heading}`,
    {
      className: classNames(textSize, appliedTextColor, disableSelection ? "select-none" : "", className),
      style: { textAlign: align, ...style },
      ...rest,
    },
    children
  );
};

export default Title;
