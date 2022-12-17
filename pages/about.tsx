import { withLayout } from "../layout/Layout";

import { Container } from "../components";

const Home = (): JSX.Element => {
  return <Container>About</Container>;
};

export default withLayout(Home);
