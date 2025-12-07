import { ButtonSpacingsSizeVariant, ColorVariant, SizeVariant } from "@/common/types";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode,
  color?: ColorVariant;
  disabled?: boolean;
  useRipple? :boolean;
  outlined?: boolean;
  size?: SizeVariant;
  paddingSize?: ButtonSpacingsSizeVariant; 
}

export type Props = ButtonProps & React.HTMLAttributes<HTMLButtonElement>;