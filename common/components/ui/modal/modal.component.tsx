"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Block } from "../../layout";
import { Props } from "./types";
import { useTheme } from "@/context/theme.context";
import { applyBgColor, applyBorderColor, applyShadowColor } from "@/common/utils";
import classNames from "classnames";

type ModalProps = Props & {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, zIndex = 50, ...rest }) => {
  const { resolvedTheme, oppositeTheme } = useTheme();
  const [containerSize, setContainerSize] = useState<"md" | "2xs">("2xs");

  useEffect(() => {
    const handleResize = () => {
      setContainerSize(window.innerWidth >= 768 ? "2xs" : "md");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null;

  const appliedBgColor = applyBgColor(resolvedTheme);
  const appliedShadowColor = applyShadowColor(oppositeTheme);
  const appliedBorderColor = applyBorderColor(oppositeTheme);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-dark/50 flex items-center justify-center"
      style={{ zIndex }}
      onClick={onClose}
    >
      <Container size={containerSize} className="flex items-center justify-center">
        <div
          {...rest}
          className={classNames(
            "w-full md:p-md p-xs rounded-md shadow-md relative max-h-[92vh] overflow-y-auto border-2",
            appliedBgColor,
            appliedShadowColor, appliedBorderColor
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 cursor-pointer text-md"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </div>
      </Container>
    </div>,
    document.body
  );
};

export default Modal;
