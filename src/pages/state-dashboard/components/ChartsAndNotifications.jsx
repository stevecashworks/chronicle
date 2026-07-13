import styled from "styled-components";
import DashboardChart from "./DashboardChart";
import Notifications from "./Notifications";

const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const ChartAndNotifications = () => {
  return (
    <Container>
      <DashboardChart />
      <Notifications />
    </Container>
  );
};

export default ChartAndNotifications;