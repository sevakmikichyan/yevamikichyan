"use client";

import React from "react";
import classNames from "classnames";
import { ListItemProps, Props } from "./types";
import { applyTextColor, getResponsiveTextSize } from "@/common/utils";
import { useTheme } from "@/context/theme.context";

const List: React.FC<Props> & { Item: React.FC<ListItemProps> } = ({
  children,
  type = "ul",
  className,
  listStyleType,
  listStylePosition,
  listStyleImage,
  style,
  ...rest
}) => {
  return React.createElement(
    type,
    {
      className: classNames("flex flex-col items-start gap-2 md:ml-8 md:my-4 ml-4 my-2", className),
      style: {
        listStyleType,
        listStylePosition,
        listStyleImage,
        ...style,
      },
      ...rest,
    },
    children
  );
};

const Item: React.FC<ListItemProps> = ({
  children,
  size = "md",
  color = "theme",
  disableSelection = false,
  style,
  className,
  ...rest
}) => {
  const { oppositeTheme } = useTheme();
  const appliedTextColor = applyTextColor(color === "theme" ? oppositeTheme : color);
  const textSize = getResponsiveTextSize(size);

  return (
    <li
      className={classNames(textSize, appliedTextColor, disableSelection ? "select-none" : "", className)}
      {...rest}
    >
      {children}
    </li>
  );
};

List.Item = Item;

export default List;
