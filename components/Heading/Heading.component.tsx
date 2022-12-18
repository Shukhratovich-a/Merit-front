import cn from "classnames";

import { HeadingProps } from "./Heading.props";

import { Htag, Ptag } from "../";

import HatIcon from "./hat.svg";

import styles from "./Heading.module.scss";

export const Heading = ({ title, description, ...props }: HeadingProps): JSX.Element => {
  return (
    <div className={cn(styles.heading)} {...props}>
      <Htag className={cn(styles.heading__title)} tag="h2">
        {title}
      </Htag>

      <Ptag className={cn(styles.heading__description)} tag="span">
        {description}
      </Ptag>

      <HatIcon />
    </div>
  );
};
