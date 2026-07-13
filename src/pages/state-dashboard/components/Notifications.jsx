import styled from "styled-components";
import {
  FiAlertCircle,
  FiUserPlus,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

const notifications = [
  {
    id: 1,
    title: "New facility registered",
    description: "General Hospital, Ikoyi has been onboarded.",
    time: "10 mins ago",
    color: "#3B82F6",
    icon: FiUserPlus,
  },
  {
    id: 2,
    title: "Disease alert",
    description: "12 suspected cholera cases reported.",
    time: "35 mins ago",
    color: "#EF4444",
    icon: FiAlertCircle,
  },
  {
    id: 3,
    title: "Monthly report submitted",
    description: "Lagos Island LGA submitted July report.",
    time: "2 hrs ago",
    color: "#10B981",
    icon: FiCheckCircle,
  },
  {
    id: 4,
    title: "Vaccination campaign",
    description: "Campaign begins tomorrow across 15 LGAs.",
    time: "Yesterday",
    color: "#F59E0B",
    icon: FiClock,
  },
];

const Card = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);


  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height:360px;
    &::-webkit-scrollbar {
    width: 4px;
    height:8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 999px;
    height:8px;

  }

  &::-webkit-scrollbar-track {
    background: transparent;
    height:8px;

  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h4`
  margin: 0;
  font-weight: 700;
  color: var(--text-primary);
`;

const Badge = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-lighter);
  color: var(--primary);

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 14px;
  cursor: pointer;
  transition: all .25s ease;

  &:hover {
    background: var(--surface-2);
    transform: translateX(4px);
  }
`;

const IconWrapper = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  background: ${({ color }) => `${color}18`};
  color: ${({ color }) => color};

  svg {
    font-size: 1.25rem;
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const ItemTitle = styled.h6`
  margin: 0;
  color: var(--text-primary);
  font-size: .95rem;
`;

const Description = styled.p`
  margin: .35rem 0;
  color: var(--text-secondary);
  font-size: .85rem;
  line-height: 1.5;
`;

const Time = styled.small`
  color: var(--text-muted);
`;

const ViewAll = styled.button`
  margin-top: 1.5rem;
  border: none;
  background: transparent;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  padding: .75rem 0;
  transition: .2s;

  &:hover {
    letter-spacing: .5px;
  }
`;

const Notifications = () => {
  return (
    <Card>
      <Header>
        <Title>Notifications</Title>
        <Badge>{notifications.length}</Badge>
      </Header>

      <List>
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <Item key={item.id}>
              <IconWrapper color={item.color}>
                <Icon />
              </IconWrapper>

              <Content>
                <ItemTitle>{item.title}</ItemTitle>

                <Description>
                  {item.description}
                </Description>

                <Time>{item.time}</Time>
              </Content>
            </Item>
          );
        })}
      </List>

      <ViewAll>
        View all notifications
      </ViewAll>
    </Card>
  );
};

export default Notifications;