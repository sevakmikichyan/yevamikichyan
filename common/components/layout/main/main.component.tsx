"use client"

import classNames from "classnames";
import React from "react";
import { Props } from "./types";

const Main: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <main
      className={classNames("w-full h-auto py-lg", className)}
      {...rest}
    >
      {children}
    </main>
  )
};

export default Main;