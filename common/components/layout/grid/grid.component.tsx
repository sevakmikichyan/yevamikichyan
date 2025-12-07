"use client"

import React from "react";
import { Props } from "./types";
import classNames from "classnames";

const Grid: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("grid", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Grid;