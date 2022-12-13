import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: "red" | "black";
  apperance?: "big" | "small";
  arrow?: "down" | "right" | "none";
  children: ReactNode;
}
