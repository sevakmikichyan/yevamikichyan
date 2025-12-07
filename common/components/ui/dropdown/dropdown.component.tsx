"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ButtonHTMLAttributes
} from "react";
import classNames from "classnames";
import Button from "../button/Button.component";
import { ButtonProps } from "../button/types";
import { useTheme } from "@/context/theme.context";
import { applyBgColor, applyBorderColor, applyHoverBgColor, applyTextColor } from "@/common/utils";

interface DropdownContextType {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

function useDropdown() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown.* must be used inside Dropdown");
  return ctx;
}

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((p) => !p);
  const close = () => setOpen(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) close();
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, toggle, close }}>
      <div ref={ref} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

type ToggleProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

Dropdown.Toggle = function DropdownToggle({ children, ...rest }: ToggleProps) {
  const { toggle } = useDropdown();
  return (
    <Button onClick={toggle} {...rest}>
      {children}
    </Button>
  );
};

Dropdown.Menu = function DropdownMenu({
  children,
  fullWidth,
  absolute
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  absolute?: boolean;
}) {
  const { resolvedTheme, oppositeTheme } = useTheme();
  const appliedBgColor = applyBgColor(resolvedTheme);
  const appliedBorderColor = applyBorderColor(oppositeTheme);
  const { open } = useDropdown();
  if (!open) return null;

  return (
    <div
      className={classNames(
        "mt-xs rounded-md border shadow-md z-50 overflow-hidden",
        appliedBgColor, appliedBorderColor,
        fullWidth && "w-full",
        absolute ? "absolute top-full left-0" : "relative"
      )}
    >
      {children}
    </div>
  );
};

Dropdown.Item = function DropdownItem(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { close } = useDropdown();
  const { children, onClick } = props;
  const { oppositeTheme, resolvedTheme } = useTheme();
  const appliedTextColor = applyTextColor(oppositeTheme);
  const appliedBgColor = applyBgColor(resolvedTheme);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    close();
  };

  return (
    <div
      {...props}
      onClick={handleClick}
      className={classNames(
        appliedBgColor, appliedTextColor,
        "px-sm py-xs cursor-pointer select-none hover:brightness-75",
        props.className
      )}
    >
      {children}
    </div>
  );
};

Dropdown.Icon = function DropdownIcon() {
  return <span className="ml-1">▼</span>;
};

export default Dropdown;
