import React from "react";

interface BlockProps {
  children?: React.ReactNode;
}

export type Props = BlockProps & React.HTMLAttributes<HTMLDivElement>;