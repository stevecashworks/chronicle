import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function RecentActivity() {
  const activities = [
    "New facility registered — Lagos General Hospital",
    "Bill #2847 approved — ₦1.2M",
    "Assessment completed — PHC Ikeja",
    "New user registered — Dr. Amina",
    "Cashbook entry — ₦500K credit"
  ];

  return (
    <Card className="dashboard-card">
      <Card.Body>
        <h5 className="fw-bold mb-4">
          Recent Activity
        </h5>

        <ListGroup variant="flush">
          {activities.map((item, index) => (
            <ListGroup.Item key={index}>
              • {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default RecentActivity;