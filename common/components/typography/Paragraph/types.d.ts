import { ColorVariant, SizeVariant } from "@/common/types";
import React from "react";

export interface ParagraphProps {
  children: React.ReactNode;
  color?: ColorVariant;
  size?: SizeVariant;
  align?: "left" | "right" | "center" | "justify";
  useShadow?: boolean;
  disableSelection?: boolean;
}

export type Props = ParagraphProps & React.HTMLAttributes<HTMLParagraphElement>;