import React from "react";

export interface ListProps {
  children: React.ReactNode;
  type?: "ul" | "ol";
  listStyleType?: string;
  listStylePosition?: string;
  listStyleImage?: string;
}

export type Props = ListProps &
  React.HTMLAttributes<HTMLUListElement> &
  React.HTMLAttributes<HTMLOListElement>;

export type ListItemProps = {
  children: React.ReactNode;
  color?: ColorVariant;
  size?: SizeVariant;
  disableSelection?: boolean;
} & React.HTMLAttributes<HTMLLIElement>;