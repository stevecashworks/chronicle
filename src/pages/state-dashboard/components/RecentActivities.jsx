import styled from "styled-components";

const activities = [
  {
    id: 1,
    title: "New Health Facility Registered",
    description: "General Hospital, Lekki Phase I has been approved.",
    time: "12 mins ago",
    type: "Facility",
    color: "#0B5D4B",
  },
  {
    id: 2,
    title: "Medical Officer Added",
    description: "Dr. Esther Johnson joined Lagos Island General Hospital.",
    time: "38 mins ago",
    type: "Staff",
    color: "#3B82F6",
  },
  {
    id: 3,
    title: "Disease Surveillance Report",
    description: "12 suspected cholera cases submitted for review.",
    time: "1 hour ago",
    type: "Disease",
    color: "#EF4444",
  },
  {
    id: 4,
    title: "Vaccination Campaign",
    description: "Over 2,300 children vaccinated across 6 LGAs.",
    time: "Today",
    type: "Immunization",
    color: "#F59E0B",
  },
  {
    id: 5,
    title: "Monthly Performance Report",
    description: "State performance report has been generated.",
    time: "Yesterday",
    type: "Report",
    color: "#8B5CF6",
  },
];

const Card = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 460px;
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h4`
  margin: 0;
  color: var(--text-primary);
`;

const Subtitle = styled.p`
  margin: .35rem 0 0;
  color: var(--text-secondary);
  font-size: .9rem;
`;

const Timeline = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: .5rem;

  scrollbar-width: thin;

  &::-webkit-scrollbar{
    width:4px;
  }

  &::-webkit-scrollbar-thumb{
    background:rgba(0,0,0,.15);
    border-radius:999px;
  }
`;

const Item = styled.div`
  display:flex;
  gap:1rem;
  position:relative;
  padding-bottom:1.6rem;

  &:last-child{
    padding-bottom:0;
  }
`;

const Left = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Dot = styled.div`
  width:14px;
  height:14px;
  border-radius:50%;
  background:${({color})=>color};
  border:3px solid white;
  box-shadow:0 0 0 2px ${({color})=>`${color}33`};
`;

const Line = styled.div`
  flex:1;
  width:2px;
  background:#E5E7EB;
  margin-top:6px;
`;

const Content = styled.div`
  flex:1;
  padding:0 0 .5rem;
`;

const ActivityTitle = styled.h6`
  margin:0;
  color:var(--text-primary);
`;

const Description = styled.p`
  margin:.45rem 0;
  color:var(--text-secondary);
  font-size:.88rem;
  line-height:1.55;
`;

const Footer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:.75rem;
  flex-wrap:wrap;
`;

const Badge = styled.div`
  background:${({color})=>`${color}18`};
  color:${({color})=>color};
  padding:.3rem .7rem;
  border-radius:999px;
  font-size:.75rem;
  font-weight:600;
`;

const Time = styled.small`
  color:var(--text-muted);
`;

const ViewMore = styled.button`
  margin-top:1rem;
  border:none;
  background:none;
  color:var(--primary);
  font-weight:600;
  cursor:pointer;
  padding-top:1rem;
  border-top:1px solid var(--border-light);

  &:hover{
    opacity:.85;
  }
`;

const RecentActivities = () => {
  return (
    <Card>
      <Header>
        <Title>Recent Activities</Title>
        <Subtitle>Latest updates across the ministry</Subtitle>
      </Header>

      <Timeline>
        {activities.map((item, index) => (
          <Item key={item.id}>
            <Left>
              <Dot color={item.color} />
              {index !== activities.length - 1 && <Line />}
            </Left>

            <Content>
              <ActivityTitle>{item.title}</ActivityTitle>

              <Description>{item.description}</Description>

              <Footer>
                <Badge color={item.color}>{item.type}</Badge>
                <Time>{item.time}</Time>
              </Footer>
            </Content>
          </Item>
        ))}
      </Timeline>

      <ViewMore>
        View Activity Log
      </ViewMore>
    </Card>
  );
};

export default RecentActivities;