import React from "react";

interface MainProps {
  children?: React.ReactNode;
}

export type Props = MainProps & React.HTMLAttributes<HTMLDivElement>;