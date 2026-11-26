import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found">
      <p className="eyebrow">404</p>
      <h1>That page wandered off.</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default NotFoundPage;
