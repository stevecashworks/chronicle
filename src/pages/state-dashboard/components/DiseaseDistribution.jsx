import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "North Zone", value: 96, color: "#0B5D4B" },
  { name: "South Zone", value: 91, color: "#3B82F6" },
  { name: "East Zone", value: 88, color: "#10B981" },
  { name: "West Zone", value: 84, color: "#F59E0B" },
  { name: "Central Zone", value: 81, color: "#EF4444" },
  { name: "Riverine Zone", value: 77, color: "#8B5CF6" },
];

const average = Math.round(
  data.reduce((a, b) => a + b.value, 0) / data.length
);

const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 1.25rem;
`;

const Header = styled.div`
  margin-bottom: 1rem;
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

const Body = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1.25rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
`;

const Center = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pointer-events: none;
`;

const Percentage = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: var(--text-primary);
`;

const Label = styled.small`
  color: var(--text-secondary);
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: .85rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
  margin-right: .75rem;
`;

const Zone = styled.div`
  flex: 1;

  h6{
    margin:0;
    color:var(--text-primary);
    font-size:.92rem;
  }

  small{
    color:var(--text-secondary);
  }
`;

const Score = styled.div`
  font-weight:700;
  color:var(--primary);
`;

const TooltipCard = styled.div`
  background:white;
  padding:.75rem 1rem;
  border-radius:12px;
  box-shadow:var(--shadow-md);
  border:1px solid var(--border-light);

  strong{
    display:block;
    margin-bottom:.35rem;
  }

  p{
    margin:0;
    color:var(--primary);
    font-weight:600;
  }
`;

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  return (
    <TooltipCard>
      <strong>{payload[0].name}</strong>
      <p>{payload[0].value}% Performance</p>
    </TooltipCard>
  );
};

const ZonalPerformance = () => {
  return (
    <Card>

      <Header>
        <Title>Zonal Performance</Title>
        <Subtitle>
          Health service performance across all zones
        </Subtitle>
      </Header>

      <Body>

        <ChartWrapper>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={84}
                paddingAngle={3}
                stroke="none"
              >
                {data.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />

            </PieChart>
          </ResponsiveContainer>

          <Center>
            <Percentage>{average}%</Percentage>
            <Label>Average Score</Label>
          </Center>

        </ChartWrapper>

        <Legend>

          {data.map((item) => (

            <Item key={item.name}>

              <Dot color={item.color} />

              <Zone>
                <h6>{item.name}</h6>
                <small>Healthcare Performance</small>
              </Zone>

              <Score>{item.value}%</Score>

            </Item>

          ))}

        </Legend>

      </Body>

    </Card>
  );
};

export default ZonalPerformance;