import { ColorVariant, SizeVariant } from "@/common/types";
import React from "react";

export interface SpanProps {
  children: React.ReactNode;
  color?: ColorVariant;
  size?: SizeVariant;
  disableSelection?: boolean;
}

export type Props = SpanProps & React.HTMLAttributes<HTMLSpanElement>;