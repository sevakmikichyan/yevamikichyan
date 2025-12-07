"use client"

import classNames from "classnames";
import React from "react";
import { Props } from "./types";

const Inline: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames("inline", className)}
      {...rest}
    >
      {children}
    </div>
  )
};

export default Inline;