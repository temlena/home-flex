import homeflex from "../assets/white varaint logo.svg";
import { Link } from "react-router-dom";
export default function HeaderUser() {
  return (
    <header className="flex bg-primary justify-between items-center p-8 h-10 ">
      <Link to="/">
        {" "}
        <img className="w-20" src={homeflex} alt="homeflex logo" />
      </Link>

      <div className=" flex items-center gap-2">
        <ul className="flex justify-between gap-5">
          <li className="list-none">
            <Link
              className="text-base text-text no-underline  hover:text-popular-colour"
              to="/DashboardPage"
            >
              Loan transaction
            </Link>
          </li>
          <li className="list-none">
            <Link
              className=" font-medium text-base text-text no-underline hover:text-popular-colour"
              to="#/list"
            >
              List a property
            </Link>
            </li>
            <li>
            <Link
              className="text-base text-text no-underline  hover:text-popular-colour"
              to="#/dashboard"
            >
              Dashboard
            </Link>

          </li>
        </ul>
        
      </div>
    </header>
  );
}
