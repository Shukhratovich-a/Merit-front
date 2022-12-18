import cn from "classnames";
import { format } from "date-fns";

import { TimeProps } from "./Time.props";

import TimeIcon from "./time.svg";

import styles from "./Time.module.scss";

export const Time = ({ className, start, end, ...props }: TimeProps): JSX.Element => {
  return (
    <div className={cn(styles.time, className)} {...props}>
      <TimeIcon />
      <span>
        {format(new Date(start), "hh.mm aaa")} - {format(new Date(end), "hh.mm aaa")}
      </span>
    </div>
  );
};
