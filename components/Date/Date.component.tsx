import cn from "classnames";
import { format } from "date-fns";

import { DateProps } from "./Date.props";

import CalandarIcon from "./calendar.svg";

import styles from "./Date.module.scss";

export const Dat = ({ className, date, ...props }: DateProps): JSX.Element => {
  return (
    <div className={cn(styles.date__wrapper, className)} {...props}>
      <CalandarIcon />
      <span className={cn(styles.date)}>{format(new Date(date), "dd.MM.yyyy")}</span>
    </div>
  );
};
