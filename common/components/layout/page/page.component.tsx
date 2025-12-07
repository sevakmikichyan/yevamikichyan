"use client"

import classNames from "classnames";
import React from "react";
import { Props } from "./types";

const Page: React.FC<Props> = ({ children, name, className, ...rest }) => {
  return (
    <div
      id={`${name}__page`}
      className={classNames("w-full min-h-screen", className)}
      {...rest}
    >
      {children}
    </div>
  )
};

export default Page;