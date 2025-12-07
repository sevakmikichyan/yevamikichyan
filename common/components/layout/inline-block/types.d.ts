import React from "react";

interface InlineBlockProps {
  children?: React.ReactNode;
}

export type Props = InlineBlockProps & React.HTMLAttributes<HTMLDivElement>;