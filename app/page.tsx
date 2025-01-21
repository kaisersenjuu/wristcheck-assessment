import Container from "@/components/Container";
import SignUp from "@/components/SignUp";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <Wrapper>
            <SignUp page="homepage" />
          </Wrapper>
        </Container>
      </main>
    </div>
  );
}
