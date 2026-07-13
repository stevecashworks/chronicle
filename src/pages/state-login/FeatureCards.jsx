import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiHome,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    title: "Real-time Analytics",
    subtitle: "Health Insights",
    icon: FiActivity,
  },
  {
    title: "Facility Management",
    subtitle: "Connected Statewide",
    icon: FiHome,
  },
  {
    title: "Medical Workforce",
    subtitle: "Registry & Licensing",
    icon: FiUsers,
  },
];

const positions = [
  { x: 0, y: 0 },
  { x: 280, y: 120 },
  { x: 60, y: 280 },
];

const Wrapper = styled.div`
  position: absolute;
  inset: 0;

  @media(max-width:992px){
    position:relative;
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-top:2rem;
  }
`;

const Card = styled(motion.div)`
  position:absolute;

  display:flex;
  align-items:center;
  gap:1rem;

  min-width:240px;

  padding:1rem 1.25rem;

  border-radius:18px;

  background:rgba(255,255,255,.12);
  backdrop-filter:blur(18px);

  border:1px solid rgba(255,255,255,.18);

  box-shadow:0 15px 35px rgba(0,0,0,.18);

  color:white;

  @media(max-width:992px){

    position:relative !important;

    transform:none !important;

    left:auto !important;
    top:auto !important;

  }
`;

const IconBox = styled.div`
  width:48px;
  height:48px;

  border-radius:14px;

  display:flex;
  justify-content:center;
  align-items:center;

  background:rgba(255,255,255,.14);

  svg{
    color:white;
    font-size:1.35rem;
  }
`;

const Text = styled.div`

  h5{
    margin:0;
    font-size:.95rem;
    font-weight:600;
  }

  p{
    margin:.35rem 0 0;
    font-size:.82rem;
    color:rgba(255,255,255,.8);
  }

`;

const FeatureCards = () => {

  return (

    <Wrapper>

      {features.map((feature,index)=>{

        const Icon = feature.icon;

        const path = [
          positions[index],
          positions[(index+1)%3],
          positions[(index+2)%3],
          positions[index],
        ];

        return(

          <Card

            key={feature.title}

           animate={{
        x: 200,
    }}
    transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
    }}
          >

            <IconBox>

              <Icon/>

            </IconBox>

            <Text>

              <h5>{feature.title}</h5>

              <p>{feature.subtitle}</p>

            </Text>

          </Card>

        )

      })}

    </Wrapper>

  );

};

export default FeatureCards;