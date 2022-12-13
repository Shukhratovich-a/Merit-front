import { withLayout } from "../layout/Layout";

import { Button, Container } from "../components";

const Home = (): JSX.Element => {
  return (
    <Container>
      <Button color="black">Button</Button>
      <Button apperance="small" color="black">
        Button
      </Button>
      <Button arrow="right">Button</Button>
      <Button apperance="small" arrow="right">
        Button
      </Button>
    </Container>
  );
};

export default withLayout(Home);
