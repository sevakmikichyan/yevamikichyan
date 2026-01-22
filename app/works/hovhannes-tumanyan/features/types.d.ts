import { SwiperComponentProps } from "@/common/components/ui/carousel/types";
import React from "react";

export type Props = SwiperComponentProps;

export interface Feature {
  title: string;
  children: React.ReactNode;
}