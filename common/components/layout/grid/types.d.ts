import React from "react";

export interface GridProps {
  children?: React.ReactNode;
}

export type Props = GridProps & React.HTMLAttributes<HTMLDivElement>;