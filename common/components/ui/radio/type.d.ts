import { ColorVariant } from "@/common/types";
import React from "react";

export interface RadioProps {
  color?: ColorVariant,
  label: string
  checked: boolean
  name: string
  onChange: () => void
}

export type Props = RadioProps & React.HTMLAttributes<HTMLInputElement>;