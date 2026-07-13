import styled from "styled-components";
import {
  FiActivity,
  FiHome,
  FiUsers,
  FiShield,
} from "react-icons/fi";

// Change these paths to yours
import CoatOfArms from "../../assets/state-logo.png";
import Illustration from "../../assets/state-logo.png";

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: linear-gradient(
    160deg,
    #0B5D4B 0%,
    #0A5344 45%,
    #08463A 100%
  );

  color: white;

  @media (max-width:992px){
    min-height:auto;
    padding:2rem;
  }
`;

const Glow = styled.div`
  position:absolute;

  width:450px;
  height:450px;

  border-radius:50%;

  background:rgba(255,255,255,.06);

  filter:blur(80px);

  top:-180px;
  right:-120px;
`;

const Glow2 = styled(Glow)`
  width:300px;
  height:300px;

  top:auto;
  bottom:-120px;
  left:-120px;
`;

const Header = styled.div`
  position:relative;
  z-index:2;
`;

const LogoRow = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;
`;

const Logo = styled.img`
  width:72px;
`;

const Ministry = styled.div`
  h2{
    margin:0;
    font-size:2rem;
    line-height:1.15;
  }

  p{
    margin:.7rem 0 0;
    color:rgba(255,255,255,.82);
    font-size:1.05rem;
  }
`;

const IllustrationWrapper = styled.div`
  position:relative;

  display:flex;
  justify-content:center;
  align-items:center;

  margin:2.5rem 0;
`;

const IllustrationImage = styled.img`
  width:100%;
  max-width:430px;
  opacity: 0.1;
`;

const FloatingCard = styled.div`
  position:absolute;

  display:flex;
  align-items:center;
  gap:.85rem;

  background:rgba(255,255,255,.12);

  backdrop-filter:blur(12px);

  border:1px solid rgba(255,255,255,.18);

  padding:.85rem 1rem;

  border-radius:18px;

  box-shadow:0 12px 30px rgba(0,0,0,.15);

  svg{
    font-size:1.3rem;
  }

  h6{
    margin:0;
    font-size:.9rem;
  }

  small{
    color:rgba(255,255,255,.8);
  }
`;

const AnalyticsCard = styled(FloatingCard)`
  top:8%;
  left:0;
`;

const FacilityCard = styled(FloatingCard)`
  right:0;
  top:35%;
`;

const WorkforceCard = styled(FloatingCard)`
  left:8%;
  bottom:2%;
`;

const Bottom = styled.div`
  position:relative;
  z-index:2;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding-top:2rem;

  border-top:1px solid rgba(255,255,255,.12);

  @media(max-width:768px){
    flex-direction:column;
    gap:1rem;
    align-items:flex-start;
  }
`;

const BottomItem = styled.div`
  display:flex;
  align-items:center;
  gap:.7rem;

  svg{
    font-size:1.3rem;
  }

  span{
    color:rgba(255,255,255,.9);
    font-size:.95rem;
  }
`;

const LoginLeft = () => {
  return (
    <Container>

      <Glow />
      <Glow2 />

      <Header>

        <LogoRow>

          <Logo
            src={CoatOfArms}
            alt=""
          />

          <Ministry>

            <h2>
              State Ministry
              <br />
              of Health
            </h2>

            <p>
              Building a healthier state through
              digital innovation.
            </p>

          </Ministry>

        </LogoRow>

      </Header>

      <IllustrationWrapper>

        <IllustrationImage
          src={Illustration}
          alt=""
        />

        <AnalyticsCard>

          <FiActivity />

          <div>
            <h6>Real-time Analytics</h6>
            <small>Health insights</small>
          </div>

        </AnalyticsCard>

        <FacilityCard>

          <FiHome />

          <div>
            <h6>Facility Management</h6>
            <small>Connected statewide</small>
          </div>

        </FacilityCard>

        <WorkforceCard>

          <FiUsers />

          <div>
            <h6>Medical Workforce</h6>
            <small>Registry & licensing</small>
          </div>

        </WorkforceCard>

      </IllustrationWrapper>

      <Bottom>

        <BottomItem>
          <FiShield />
          <span>Secure</span>
        </BottomItem>

        <BottomItem>
          <FiActivity />
          <span>Reliable</span>
        </BottomItem>

        <BottomItem>
          <FiUsers />
          <span>Accessible</span>
        </BottomItem>

      </Bottom>

    </Container>
  );
};

export default LoginLeft;