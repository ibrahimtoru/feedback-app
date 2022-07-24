import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>version: 1.0.0</p>

        <p>
          <Link to={"/"}>Back </Link>
        </p>
      </div>
    </Card>
  );
}
