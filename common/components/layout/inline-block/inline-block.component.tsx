"use client"

import classNames from "classnames";
import React from "react";
import { Props } from "./types";

const InlineBlock: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("inline-block", className)}
      {...rest}
    >
      {children}
    </div>
  )
};

export default InlineBlock;