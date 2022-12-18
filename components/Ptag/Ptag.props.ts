import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement & HTMLParagraphElement>,
    HTMLSpanElement & HTMLParagraphElement
  > {
  size?: "small" | "middle" | "big";
  tag?: "p" | "span";
}
