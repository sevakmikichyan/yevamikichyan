"use client"

import React from "react";
import classNames from "classnames";
import { Props } from "./types";

const Container: React.FC<Props> = ({
  children,
  size = "md",
  className,
  ...rest
}: Props) => {
  const sizeMap: Record<
    string,
    { maxWidth: string; widthPercent: string }
  > = {
    "2xs": { maxWidth: "max-w-[80rem]", widthPercent: "w-[60%]" },
    xs: { maxWidth: "max-w-[85rem]", widthPercent: "w-[70%]" },
    sm: { maxWidth: "max-w-[90rem]", widthPercent: "w-[85%]" },
    md: { maxWidth: "max-w-[120rem]", widthPercent: "w-[90%]" },
    lg: { maxWidth: "max-w-[160rem]", widthPercent: "w-[95%]" },
    xl: { maxWidth: "max-w-[180rem]", widthPercent: "w-[98%]" },
    "2xl": { maxWidth: "max-w-[200rem]", widthPercent: "w-full" }
  };

  const { maxWidth, widthPercent } = sizeMap[size] || sizeMap["md"];

  return (
    <div
      className={classNames(widthPercent, maxWidth, "mx-auto h-full", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
