import Container from "@/components/Container";
import SignUp from "@/components/SignUp";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";

const PricePage: NextPage = (): React.ReactElement => {
  return (
    <div>
      <main>
        <Container>
          <Wrapper>
            <SignUp page="price" />
          </Wrapper>
        </Container>
      </main>
    </div>
  );
};

export default PricePage;
