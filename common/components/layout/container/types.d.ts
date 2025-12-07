import { SizeVariant } from "@/common/types";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  size?: SizeVariant;
}

export type Props = ContainerProps & React.HTMLAttributes<HTMLDivElement>;