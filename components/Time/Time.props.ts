import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TimeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  start: Date | number;
  end: Date | number;
}
