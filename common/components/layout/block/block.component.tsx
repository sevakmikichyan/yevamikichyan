"use client"

import classNames from "classnames";
import React from "react";
import { Props } from "./types";

const Block: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("block", className)}
      {...rest}
    >
      {children}
    </div>
  )
};

export default Block;