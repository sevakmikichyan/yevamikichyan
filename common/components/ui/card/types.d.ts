import React from "react";

export interface CardProps {
  children?: React.ReactNode;
}

export type Props = CardProps & React.HtmlHTMLAttributes<HTMLDivElement>;