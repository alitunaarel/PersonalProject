import { ReactElement } from "react";

export interface ButtonTypes {
  color?: string;
  height?: string;
  width?: string;
  border?: string;
  disabled?: boolean;
  dataId?: string;
  label?: string | ReactElement;
  onClick: () => void;
}
