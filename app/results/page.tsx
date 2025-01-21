import Container from "@/components/Container";
import Result from "@/components/Result";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";

const Results: NextPage = (): React.ReactElement => {
  return (
    <div>
      <main>
        <Container>
          <Wrapper>
            <Result />
          </Wrapper>
        </Container>
      </main>
    </div>
  );
};

export default Results;
