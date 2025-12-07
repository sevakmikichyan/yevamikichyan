import React from "react";

interface PageProps {
  children: React.ReactNode;
  name: string;
}

export type Props = PageProps & React.HTMLAttributes<HTMLDivElement>;