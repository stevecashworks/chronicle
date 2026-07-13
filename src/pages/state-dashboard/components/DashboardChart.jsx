import { useState } from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";

const monthlyData = [
  { month: "Jan", visits: 2100 },
  { month: "Feb", visits: 2800 },
  { month: "Mar", visits: 2400 },
  { month: "Apr", visits: 3500 },
  { month: "May", visits: 4100 },
  { month: "Jun", visits: 3800 },
  { month: "Jul", visits: 4500 },
];

const weeklyData = [
  { month: "Mon", visits: 520 },
  { month: "Tue", visits: 740 },
  { month: "Wed", visits: 680 },
  { month: "Thu", visits: 910 },
  { month: "Fri", visits: 860 },
  { month: "Sat", visits: 420 },
  { month: "Sun", visits: 350 },
];

const yearlyData = [
  { month: "2020", visits: 28000 },
  { month: "2021", visits: 33500 },
  { month: "2022", visits: 40100 },
  { month: "2023", visits: 43600 },
  { month: "2024", visits: 50200 },
];

const datasets = {
  "This Week": weeklyData,
  "This Month": monthlyData,
  "This Year": yearlyData,
};

const Card = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const Heading = styled.div``

const Title = styled.h4`
  margin: 0;
  color: var(--text-primary);
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: .35rem 0 0;
  color: var(--text-secondary);
  font-size: .9rem;
`;

const Filter = styled.select`
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: .75rem 2.5rem .75rem 1rem;
  background: var(--surface);
  color: var(--text-primary);
  font-size: .9rem;
  cursor: pointer;
  appearance: none;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Icon = styled(FiChevronDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-secondary);
`;

const TooltipCard = styled.div`
  background: white;
  padding: .8rem 1rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);

  strong {
    display: block;
    color: var(--text-primary);
    margin-bottom: .25rem;
  }

  p {
    margin: 0;
    color: var(--primary);
    font-weight: 600;
  }
`;

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <TooltipCard>
      <strong>{label}</strong>
      <p>{payload[0].value.toLocaleString()} visits</p>
    </TooltipCard>
  );
};

const DashboardChart = () => {
  const [filter, setFilter] = useState("This Month");

  return (
    <Card>
      <Header>
        <Heading>
          <Title>Facilities Onboarded</Title>
          <Subtitle>
            Onboarding trend across this state
          </Subtitle>
        </Heading>

        <SelectWrapper>
          <Filter
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </Filter>

          <Icon />
        </SelectWrapper>
      </Header>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={datasets[filter]}>
          <defs>
            <linearGradient
              id="patientGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#0B5D4B"
                stopOpacity={0.35}
              />

              <stop
                offset="95%"
                stopColor="#0B5D4B"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#6B7280",
              fontSize: 13,
            }}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#6B7280",
              fontSize: 13,
            }}
          />

          <Tooltip
            content={<CustomTooltip />}
          />

          <Area
            type="monotone"
            dataKey="visits"
            stroke="#0B5D4B"
            strokeWidth={3}
            fill="url(#patientGradient)"
            activeDot={{
              r: 7,
              fill: "#0B5D4B",
              stroke: "#fff",
              strokeWidth: 3,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default DashboardChart;