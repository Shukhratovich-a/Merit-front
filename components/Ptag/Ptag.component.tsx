import cn from "classnames";

import { PtagProps } from "./Ptag.props";

import styles from "./Ptag.module.scss";

export const Ptag = ({ className, children, size = "middle", tag = "p", ...props }: PtagProps): JSX.Element => {
  switch (size) {
    case "small":
      return tag === "p" ? (
        <p className={cn(styles.small, className)} {...props}>
          {children}
        </p>
      ) : (
        <span className={cn(styles.small, className)} {...props}>
          {children}
        </span>
      );
    case "middle":
      return tag === "p" ? (
        <p className={cn(styles.middle, className)} {...props}>
          {children}
        </p>
      ) : (
        <span className={cn(styles.middle, className)} {...props}>
          {children}
        </span>
      );
    case "big":
      return tag === "p" ? (
        <p className={cn(styles.big, className)} {...props}>
          {children}
        </p>
      ) : (
        <span className={cn(styles.big, className)} {...props}>
          {children}
        </span>
      );
    default:
      return <></>;
  }
};
