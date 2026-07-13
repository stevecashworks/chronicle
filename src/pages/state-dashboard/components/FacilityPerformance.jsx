import { useMemo, useState } from "react";
import styled from "styled-components";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";

const weekly = [
  { name: "General Hospital", value: 91 },
  { name: "Primary HC", value: 84 },
  { name: "Specialist Hosp.", value: 76 },
  { name: "Maternity", value: 68 },
  { name: "Community Clinic", value: 60 },
];

const monthly = [
  { name: "General Hospital", value: 95 },
  { name: "Primary HC", value: 88 },
  { name: "Specialist Hosp.", value: 81 },
  { name: "Maternity", value: 74 },
  { name: "Community Clinic", value: 66 },
];

const yearly = [
  { name: "General Hospital", value: 98 },
  { name: "Primary HC", value: 92 },
  { name: "Specialist Hosp.", value: 89 },
  { name: "Maternity", value: 82 },
  { name: "Community Clinic", value: 77 },
];

const source = {
  "This Week": weekly,
  "This Month": monthly,
  "This Year": yearly,
};

const Card = styled.div`
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  padding: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Heading = styled.div``;

const Title = styled.h4`
  margin: 0;
  color: var(--text-primary);
`;

const Subtitle = styled.p`
  margin: .35rem 0 0;
  color: var(--text-secondary);
  font-size: .9rem;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Filter = styled.select`
  appearance: none;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  padding: .75rem 2.4rem .75rem 1rem;
  cursor: pointer;
`;

const Chevron = styled(FiChevronDown)`
  position: absolute;
  top: 50%;
  right: .9rem;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-secondary);
`;

const TooltipBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: .8rem 1rem;
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-md);

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
    <TooltipBox>
      <strong>{payload[0].payload.name}</strong>
      <p>{payload[0].value}% Performance</p>
    </TooltipBox>
  );
};

const FacilityPerformance = () => {

  const [filter,setFilter]=useState("This Month");

  const data = useMemo(() => source[filter],[filter]);

  return (
    <Card>

      <Header>

        <Heading>
          <Title>Facility Performance</Title>

          <Subtitle>
            Top performing healthcare facilities
          </Subtitle>
        </Heading>

        <SelectWrapper>

          <Filter
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </Filter>

          <Chevron/>

        </SelectWrapper>

      </Header>

      <ResponsiveContainer
        width="100%"
        height={280}
      >

        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top:10,
            right:20,
            left:20,
            bottom:10
          }}
        >

          <CartesianGrid
            horizontal={false}
            strokeDasharray="3 3"
            stroke="#ECECEC"
          />

          <XAxis
            type="number"
            domain={[0,100]}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            width={115}
            tick={{
              fill:"#6B7280",
              fontSize:12
            }}
          />

          <Tooltip content={<CustomTooltip/>}/>

          <Bar
            dataKey="value"
            radius={[0,20,20,0]}
            barSize={18}
          >

            {data.map((entry,index)=>(
              <Cell
                key={index}
                fill={
                  index===0
                    ? "#0B5D4B"
                    : "#8DD6C4"
                }
              />
            ))}

          </Bar>

        </BarChart>

      </ResponsiveContainer>

    </Card>
  );
};

export default FacilityPerformance;