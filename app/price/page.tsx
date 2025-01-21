import Container from "@/components/Container";
import SignUp from "@/components/SignUp";
import PriceForm from "@/components/SignUp/PriceForm";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";

const PricePage: NextPage = (): React.ReactElement => {
  return (
    <div>
      <main>
        <Container>
          <Wrapper>
            <PriceForm />
          </Wrapper>
        </Container>
      </main>
    </div>
  );
};

export default PricePage;
