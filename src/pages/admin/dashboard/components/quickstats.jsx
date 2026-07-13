import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components"
const StyledProgressBar= styled(ProgressBar)`
background-color:height:10px;
`

function QuickStats() {
  return (
    <Card className="dashboard-card">
      <Card.Body>
        <h5 className="fw-bold mb-4">
          Quick Stats
        </h5>

        <p>Facilities Onboarded</p>
        <ProgressBar variant="primary" style={{height:"10px"}} now={78} className="mb-4" />

        <p>Bills Processed</p>
        <ProgressBar variant="primary" style={{height:"10px"}} now={65} className="mb-4" />

        <p>Approvals Completed</p>
        <ProgressBar variant="primary" style={{height:"10px"}} now={92} />
      </Card.Body>
    </Card>
  );
}

export default QuickStats;