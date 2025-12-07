import { ColorVariant, SizeVariant } from "@/common/types";
import React from "react";

export interface TitleProps {
  children: React.ReactNode;
  heading: 1 | 2 | 3 | 4 | 5 | 6;
  color?: ColorVariant;
  size?: SizeVariant;
  align?: "left" | "right" | "center" | "justify";
  useShadow?: boolean;
  disableSelection?: boolean,
}

export type Props = TitleProps & React.HTMLAttributes<HTMLHeadingElement>;