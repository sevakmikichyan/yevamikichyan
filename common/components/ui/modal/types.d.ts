import React from "react";
import { BlockProps } from "../../layout/block/types";

export interface ModalProps {
  children?: React.ReactNode;
}

export type Props = ModalProps & BlockProps;