import { withLayout } from "../layout/Layout";

import { Button, Container, IData, Heading, Htag, Ptag, Time } from "../components";

const Home = (): JSX.Element => {
  return (
    <Container>
      <Button color="black">Button</Button>
      <Button apperance="small" color="black">
        Button
      </Button>
      <Button arrow="right">Browse all courses</Button>
      <Button apperance="small" arrow="right">
        Button
      </Button>

      <Htag tag="h1">Joshqin</Htag>
      <Htag tag="h2">Joshqin</Htag>
      <Htag tag="h3">Joshqin</Htag>

      <Heading title="Popular courses" description="There are many variations of passages of lorem ipsum" />

      <Ptag size="small" tag="p">
        Joshqin
      </Ptag>
      <Ptag size="middle" tag="p">
        Joshqin
      </Ptag>
      <Ptag size="big" tag="p">
        Joshqin
      </Ptag>

      <Ptag size="small" tag="span">
        Joshqin
      </Ptag>
      <Ptag size="middle" tag="span">
        Joshqin
      </Ptag>
      <Ptag size="big" tag="span">
        Joshqin
      </Ptag>

      <IData date={new Date()} />

      <Time start={10} end={new Date()} />
    </Container>
  );
};

export default withLayout(Home);
