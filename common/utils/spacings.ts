import { ButtonSpacingsSizeVariant } from "../types";

export function getPaddingBySize(size: ButtonSpacingsSizeVariant) {
  switch (size) {
    case "lg":
      return "md:px-2xl px-xl md:py-sm py-xs";
    case "sm":
      return "md:px-xl px-lg py-2xs";
    default:
      return "md:px-2xl px-xl md:py-xs md:py-xs py-2xs";
  }
}
