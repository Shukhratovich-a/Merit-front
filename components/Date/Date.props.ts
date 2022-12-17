import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DateProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  date: Date | number;
}
