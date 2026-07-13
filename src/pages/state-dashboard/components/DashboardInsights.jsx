import styled from "styled-components";
import FacilityPerformance from "./FacilityPerformance";
import RecentActivities from "./RecentActivities";
import ZonalPerformance from "./DiseaseDistribution";

const Container = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr ;
  gap: 1.5rem;
  width: 100%;
  padding-left:50px;
  padding-right: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const DashboardInsights = () => {
  return (
    <Container>
      {/* <FacilityPerformance /> */}
      <ZonalPerformance />
      <RecentActivities />
    </Container>
  );
};

export default DashboardInsights;