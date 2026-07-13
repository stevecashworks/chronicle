import styled from "styled-components";
import {
  FiHome,
  FiUsers,
  FiActivity,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    title: "Health Facilities",
    value: "248",
    change: "+12%",
    subtitle: "vs last month",
    icon: FiHome,
    color: "#0B5D4B",
    bg: "#E7F8F2",
  },
  {
    title: "Health Workers",
    value: "5,842",
    change: "+8.4%",
    subtitle: "vs last month",
    icon: FiUsers,
    color: "#3B82F6",
    bg: "#EAF2FF",
  },
  {
    title: "Total Revenue",
    value: "124.5K",
    change: "+15.6%",
    subtitle: "vs last month",
    icon: FiActivity,
    color: "#F59E0B",
    bg: "#FFF5E8",
  },
//   {
//     title: "Immunizations",
//     value: "85.4K",
//     change: "+10.2%",
//     subtitle: "vs last month",
//     icon: FiHeart,
//     color: "#8B5CF6",
//     bg: "#F4EDFF",
//   },
];

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  padding: 50px 60px 0px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 1.35rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: all .25s ease;
  min-width: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const IconWrapper = styled.div`
  width: clamp(56px, 6vw, 68px);
  height: clamp(56px, 6vw, 68px);
  border-radius: 18px;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  svg {
    font-size: clamp(1.5rem, 2vw, 2rem);
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: clamp(.82rem, 1vw, .95rem);
`;

const Value = styled.h2`
  margin: .3rem 0;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.1;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
  flex-wrap: wrap;

  color: var(--success);
  font-size: clamp(.75rem, .9vw, .9rem);
  font-weight: 600;

  span {
    color: var(--text-secondary);
    font-weight: 400;
  }

  svg {
    font-size: 1rem;
  }
`;

const StatsCards = () => {
  return (
    <Container>
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <IconWrapper
              bg={item.bg}
              color={item.color}
            >
              <Icon />
            </IconWrapper>

            <Content>
              <Title>{item.title}</Title>

              <Value>{item.value}</Value>

              <Footer>
                <FiTrendingUp />
                {item.change}
                <span>{item.subtitle}</span>
              </Footer>
            </Content>
          </Card>
        );
      })}
    </Container>
  );
};

export default StatsCards;