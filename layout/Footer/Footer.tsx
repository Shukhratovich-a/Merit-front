import cn from "classnames";

import { FooterProps } from "./Footer.props";

import { Container } from "../../components";

import styles from "./Footer.module.scss";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <Container>footer</Container>
    </footer>
  );
};
