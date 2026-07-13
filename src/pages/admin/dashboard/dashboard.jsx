import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/sideBar";
import Topbar from "./components/topBar";
import StatCard from "./components/statCard";
import RecentActivity from "./components/recentActivity";
import QuickStats from "./components/quickstats";
import "./dashboard.css"
import styled from "styled-components"
const StyledHeading= styled.h2`
color:var(--secondary-color);
margin-top:20px;


`

function Dashboard() {
  return (
    <div className="dashboard-wrapper ">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <Container fluid className="p-4">
          <StyledHeading  style={{opacity:0.7, }}>Dashboard</StyledHeading>
          <p className="text-muted">
            Welcome back, Admin
          </p>

          <Row className="g-4 mt-2">
            <Col xl={3} md={6}>
              <StatCard
                title="Total Facilities"
                value="1,284"
                change="+12% from last month"
              />
            </Col>

            <Col xl={3} md={6}>
              <StatCard
                title="Active Users"
                value="342"
                change="+8% from last month"
              />
            </Col>

            <Col xl={3} md={6}>
              <StatCard
                title="Revenue"
                value="₦45.2M"
                change="+23% from last month"
              />
            </Col>

            <Col xl={3} md={6}>
              <StatCard
                title="Pending Approvals"
                value="18"
                change="-5% from last month"
              />
            </Col>
          </Row>

          <Row className="g-4 mt-3">
            <Col lg={6}>
              <RecentActivity />
            </Col>

            <Col lg={6}>
              <QuickStats />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;