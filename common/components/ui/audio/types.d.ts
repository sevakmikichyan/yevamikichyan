import React from "react";

export interface AudioProps {
  src?: string;
}

export type Props = AudioProps & React.HTMLAttributes<HTMLAudioElement>;