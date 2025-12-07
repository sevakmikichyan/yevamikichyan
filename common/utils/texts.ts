import { SizeVariant } from "../types";

export const texts = {
  "2xs": "text-2xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl"
};

const textsF = {
  "2xs": "text-2xs",
  xs: "text-2xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-md",
  xl: "text-lg",
  "2xl": "text-xl"
};

const responsiveTextsF = {
  "2xs": "md:text-2xs",
  xs: "md:text-xs",
  sm: "md:text-sm",
  md: "md:text-md",
  lg: "md:text-lg",
  xl: "md:text-xl",
  "2xl": "md:text-2xl"
}

export const getResponsiveTextSize = (size: SizeVariant): string => {
  return `${textsF[size]} ${responsiveTextsF[size]}`;
};
