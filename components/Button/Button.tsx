import cn from "classnames";

import { ButtonProps } from "./Button.props";

import ArrowIcon from "./arrow.svg";

import styles from "./Button.module.scss";

export const Button = ({
  className,
  children,
  color = "red",
  apperance = "big",
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.red]: color === "red",
        [styles.black]: color === "black",
        [styles.big]: apperance === "big",
        [styles.small]: apperance === "small",
      })}
      {...props}
    >
      {children}

      {arrow !== "none" && (
        <span className={cn(styles.arrow, { [styles.down]: arrow === "down" })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
