import { Link } from "react-router";
const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a>Detail page</a>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
