import styled from "styled-components";
import {
  FiHeart,
  FiUsers,
  FiShield,
  FiFeather,
} from "react-icons/fi";
import stateLogo from "../../../assets/state-logo.png"
const Container = styled.section`
  margin-top: 2rem;
  padding: 2rem 2.5rem;

  background: linear-gradient(
    90deg,
    #0B5D4B 0%,
    #08463A 100%
  );

  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  overflow: hidden;
  margin-top:50px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: stretch;
    padding: 2rem;
  }
`;

const Left = styled.div`
  flex: 2.2;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width:768px){
    flex-direction: column;
    text-align:center;
  }
`;

const IconCircle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;

  background: rgba(255,255,255,.12);
  backdrop-filter: blur(8px);

  display:flex;
  justify-content:center;
  align-items:center;

  flex-shrink:0;

  svg{
    font-size:2.6rem;
    color:white;
  }
`;

const Content = styled.div``;

const Title = styled.h3`
  margin:0;
  font-weight:700;
`;

const Description = styled.p`
  margin:.75rem 0 0;
  line-height:1.8;
  color:rgba(255,255,255,.92);
  max-width:520px;
`;

const Right = styled.div`
  flex:1.6;

  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:2rem;

  @media(max-width:1100px){
    border-top:1px solid rgba(255,255,255,.15);
    padding-top:1.75rem;
  }

  @media(max-width:768px){
    flex-direction:column;
    gap:1.5rem;
  }
`;

const Stat = styled.div`
  flex:1;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:.9rem;

  position:relative;

  &:not(:last-child)::after{
    content:"";
    position:absolute;
    right:-1rem;
    top:50%;
    transform:translateY(-50%);
    width:1px;
    height:48px;
    background:rgba(255,255,255,.18);
  }

  @media(max-width:768px){

    justify-content:flex-start;

    &:not(:last-child)::after{
      display:none;
    }
  }

  svg{
    font-size:2rem;
    opacity:.9;
  }
`;

const Label = styled.span`
  font-size:1rem;
  font-weight:500;
  white-space:nowrap;
`;
const FooterLogo=styled.img`
width:50px;
opacity: 0.2;
    
`

const MissionBanner = () => {
  return (
    <Container>

      <Left>

    
<FooterLogo alt="state-logo" src={stateLogo}/>

      </Left>

      <Right>

        <Stat>
          <FiUsers />
          <Label>Healthy People</Label>
        </Stat>

        <Stat>
          <FiShield />
          <Label>Strong Systems</Label>
        </Stat>

        <Stat>
          <FiFeather />
          <Label>Better Outcomes</Label>
        </Stat>

      </Right>

    </Container>
  );
};

export default MissionBanner;