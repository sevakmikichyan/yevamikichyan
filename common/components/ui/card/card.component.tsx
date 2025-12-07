"use client"

import React from "react";
import { Block } from "../../layout";
import { applyBgColor, applyShadowColor, getPaddingBySize } from "@/common/utils";
import { useTheme } from "@/context/theme.context";
import classNames from "classnames";
import { Props } from "./types";

const Card: React.FC<Props> = ({ children, className, ...rest }) => {
  const { oppositeTheme, resolvedTheme } = useTheme();
  const appliedShadowColor = applyShadowColor(oppositeTheme);
  const appliedBgColor = applyBgColor(resolvedTheme);

  return (
    <Block className={classNames(
      "w-full h-auto md:p-md p-sm",
      "rounded-md shadow-md",
      appliedShadowColor, appliedBgColor,
      className
    )}
    >
      {children}
    </Block>
  );
};

export default Card;