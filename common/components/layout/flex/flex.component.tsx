"use client"

import classNames from "classnames";
import React from "react";
import { Props } from "./types";

const Flex: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("flex items-start", className)}
      {...rest}
    >
      {children}
    </div>
  )
};

export default Flex;