import { ColorVariant } from "../types";

export const colors = {
  primary: "#0d6efd",
  secondary: "#6c757d",
  error: "#dc3545",
  warning: "#ffc107",
  success: "#198754",
  info: "#0dcaf0",
  light: "#f0f0f0",
  dark: "#0f0f0f",
  orange: "#fd7e14",
  violet: "#6f42c1",
  indigo: "#6610f2",
  teal: "#20c997",
  rose: "#d63384"
};

export const applyColor = (style: string, color: ColorVariant): string => {
  return `${style}-${color}`;
};

export const applyBgColor = (color: ColorVariant): string => {
  switch (color) {
    case "primary": return "bg-primary";
    case "secondary": return "bg-secondary";
    case "error": return "bg-error";
    case "warning": return "bg-warning";
    case "success": return "bg-success";
    case "info": return "bg-info";
    case "light": return "bg-light";
    case "dark": return "bg-dark";
    case "orange": return "bg-orange";
    case "violet": return "bg-violet";
    case "indigo": return "bg-indigo";
    case "teal": return "bg-teal";
    case "rose": return "bg-rose";
    default: return "bg-primary";
  }
};

export const applyTextColor = (color: ColorVariant): string => {
  switch (color) {
    case "primary": return "text-primary";
    case "secondary": return "text-secondary";
    case "error": return "text-error";
    case "warning": return "text-warning";
    case "success": return "text-success";
    case "info": return "text-info";
    case "light": return "text-light";
    case "dark": return "text-dark";
    case "orange": return "text-orange";
    case "violet": return "text-violet";
    case "indigo": return "text-indigo";
    case "teal": return "text-teal";
    case "rose": return "text-rose";
    default: return "text-primary";
  }
};

export const applyBorderColor = (color: ColorVariant): string => {
  switch (color) {
    case "primary": return "border-primary";
    case "secondary": return "border-secondary";
    case "error": return "border-error";
    case "warning": return "border-warning";
    case "success": return "border-success";
    case "info": return "border-info";
    case "light": return "border-light";
    case "dark": return "border-dark";
    case "orange": return "border-orange";
    case "violet": return "border-violet";
    case "indigo": return "border-indigo";
    case "teal": return "border-teal";
    case "rose": return "border-rose";
    default: return "border-primary";
  }
};

export const applyHoverBgColor = (color: ColorVariant): string => {
  switch (color) {
    case "primary": return "hover:bg-primary";
    case "secondary": return "hover:bg-secondary";
    case "error": return "hover:bg-error";
    case "warning": return "hover:bg-warning";
    case "success": return "hover:bg-success";
    case "info": return "hover:bg-info";
    case "light": return "hover:bg-light";
    case "dark": return "hover:bg-dark";
    case "orange": return "hover:bg-orange";
    case "violet": return "hover:bg-violet";
    case "indigo": return "hover:bg-indigo";
    case "teal": return "hover:bg-teal";
    case "rose": return "hover:bg-rose";
    default: return "hover:bg-primary";
  }
};

export const applyHoverTextColor = (color: ColorVariant): string => {
  switch (color) {
    case "primary": return "hover:text-primary";
    case "secondary": return "hover:text-secondary";
    case "error": return "hover:text-error";
    case "warning": return "hover:text-warning";
    case "success": return "hover:text-success";
    case "info": return "hover:text-info";
    case "light": return "hover:text-light";
    case "dark": return "hover:text-dark";
    case "orange": return "hover:text-orange";
    case "violet": return "hover:text-violet";
    case "indigo": return "hover:text-indigo";
    case "teal": return "hover:text-teal";
    case "rose": return "hover:text-rose";
    default: return "hover:text-primary";
  }
};

export const applyShadowColor = (color: ColorVariant): string => {
  switch (color) {
    case "primary": return "shadow-primary/25";
    case "secondary": return "shadow-secondary/25";
    case "error": return "shadow-error/25";
    case "warning": return "shadow-warning/25";
    case "success": return "shadow-success/25";
    case "info": return "shadow-info/25";
    case "light": return "shadow-light/25";
    case "dark": return "shadow-dark/25";
    case "orange": return "shadow-orange/25";
    case "violet": return "shadow-violet/25";
    case "indigo": return "shadow-indigo/25";
    case "teal": return "shadow-teal/25";
    case "rose": return "shadow-rose/25";
    default: return "shadow-primary/25";
  }
};

export const getLightOrDark = (color: ColorVariant): "light" | "dark" => {
  const colorsForLight = ["primary", "secondary", "error", "success", "dark", "indigo", "violet", "rose"];
  const colorsForDark = ["warning", "info", "orange", "teal", "light"];

  if (colorsForLight.includes(color)) return "light";
  if (colorsForDark.includes(color)) return "dark";
  return "dark";
};