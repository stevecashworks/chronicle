import Card from "react-bootstrap/Card";

function StatCard({
  title,
  value,
  change
}) {
  return (
    <Card className="dashboard-card">
      <Card.Body>
        <div className="text-muted">
          {title}
        </div>

        <h4 className=" mt-3" style={{opacity:0.7}}>
          {value}
        </h4>

        <small className="text-success">
          {change}
        </small>
      </Card.Body>
    </Card>
  );
}

export default StatCard;