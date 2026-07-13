import styled from "styled-components";
import LoginForm from "./LoginForm";

// Replace with your logo
import ChronicleLogo from "../../assets/state-logo.png";

const Wrapper = styled.div`
  width: 100%;
  max-width: 520px;
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  padding: 3rem;

  border: 1px solid var(--border-light);

  box-shadow:
    0 20px 60px rgba(15, 23, 42, 0.08),
    0 5px 20px rgba(15, 23, 42, 0.05);

  @media (max-width:768px){
    padding:2rem;
  }
`;

const Logo = styled.img`
  width: 74px;
  display:block;
  margin:auto;
`;

const Title = styled.h2`
  margin: 2rem 0 .5rem;
  text-align:center;
  color:var(--text-primary);
  font-size:2rem;
`;

const Subtitle = styled.p`
  text-align:center;
  color:var(--text-secondary);
  margin-bottom:2.5rem;
  line-height:1.7;
`;

const Footer = styled.div`
  margin-top:2rem;

  text-align:center;

  color:var(--text-secondary);

  font-size:.9rem;

  a{
    color:var(--primary);
    font-weight:600;
    text-decoration:none;
  }
`;

const LoginRight = () => {
  return (
    <Wrapper>

      <Card>

        <Logo
          src={ChronicleLogo}
          alt="Chronicle"
        />

        <Title>
          Welcome Back
        </Title>

        <Subtitle>
          Sign in to continue to the State Ministry
          of Health Dashboard.
        </Subtitle>

        <LoginForm />

        <Footer>

          © {new Date().getFullYear()} Chronicle Health Platform

          <br />

          Powered by{" "}
          <a href="#">
            Chronicle
          </a>

        </Footer>

      </Card>

    </Wrapper>
  );
};

export default LoginRight;