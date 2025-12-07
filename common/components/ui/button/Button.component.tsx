"use client"

import React, { useState, useRef, useEffect } from "react";
import type { Props } from "./types";
import {
  applyBgColor,
  applyBorderColor,
  applyTextColor,
  applyHoverBgColor,
  applyHoverTextColor,
  getLightOrDark,
  applyShadowColor,
  getResponsiveTextSize,
  getPaddingBySize
} from "@/common/utils";
import classNames from "classnames";

const Button: React.FC<Props> = ({
  children,
  color = "primary",
  disabled = false,
  useRipple = true,
  outlined,
  size = "md",
  paddingSize = "lg",
  className,
  ...rest
}) => {
  const [ripples, setRipples] = useState<{ x: number, y: number, size: number, key: number }[]>([]);
  const rippleKey = useRef(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: rippleKey.current++ };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter(r => r.key !== newRipple.key));
    }, 600);

    if (rest.onClick) rest.onClick(e);
  };

  const appliedBgColor = outlined ? "bg-transparent" : applyBgColor(color);
  const appliedTextColor = outlined ? applyTextColor(color) : applyTextColor(getLightOrDark(color));
  const appliedBorderColor = applyBorderColor(color);
  const appliedHoverBgColor = outlined ? applyHoverBgColor(color) : "hover:brightness-75";
  const appliedHoverTextColor = outlined ? applyHoverTextColor(getLightOrDark(color)) : "";
  const appliedShadowColor = applyShadowColor(color);
  const appliedRippleColor = applyBgColor(getLightOrDark(color));
  const responsiveTextSize = getResponsiveTextSize(size);
  const paddingClasses = getPaddingBySize(paddingSize);

  return (
    <button
      ref={btnRef}
      className={classNames(
        "relative overflow-hidden border-2 shadow-md",
        appliedBgColor,
        appliedTextColor,
        appliedBorderColor,
        appliedShadowColor,
        paddingClasses,
        responsiveTextSize,
        "rounded-md select-none text-center flex items-center justify-center gap-2",
        "duration-300 transition-all",
        className,
        {
          "cursor-not-allowed opacity-50": disabled,
          [appliedHoverBgColor]: !disabled,
          [appliedHoverTextColor]: !disabled,
          "cursor-pointer": !disabled
        }
      )}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {useRipple && !disabled && (
        <>
          {ripples.map(r => (
            <span
              key={r.key}
              style={{
                left: r.x,
                top: r.y,
                width: r.size,
                height: r.size,
              }}
              className={classNames(
                appliedRippleColor,
                "animate-ripple absolute rounded-full pointer-events-none"
              )}
            />
          ))}
        </>
      )}
    </button>
  );
};

export default Button;