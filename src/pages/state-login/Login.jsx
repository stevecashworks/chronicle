import styled from "styled-components";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background: #f8fafc;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 0 0 42%;
  min-height: 100vh;

  @media (max-width: 992px) {
    min-height: auto;
    flex: none;
  }
`;

const RightSection = styled.div`
  flex: 1;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  background:
    radial-gradient(circle at top right, rgba(11,93,75,.06), transparent 35%),
    #ffffff;

  @media (max-width: 992px) {
    min-height: auto;
    padding: 3rem 1.25rem;
  }
`;

const Login = () => {
  return (
    <Container>

      <LeftSection>
        <LoginLeft />
      </LeftSection>

      <RightSection>
        <LoginRight />
      </RightSection>

    </Container>
  );
};

export default Login;