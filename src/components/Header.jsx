import homeflex from "../assets/white varaint logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
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
              className="text-base text-text no-underline  hover:text-popular-colour "
              to="/DashboardPage"
            >
              Loan transaction
            </Link>
          </li>
          <li className="list-none">
            <a
              className=" font-medium text-base text-text no-underline hover:text-popular-colour "
              href="#/list"
            >
              List a property
            </a>
          </li>
        </ul>
        <Link to="/SignUpPage">
          <button className="py-1 px-3 rounded text-blue bg-white border-none text-primary  cursor-pointer tracking-wider font-normal text-base hover:text-service">
            Sign up
          </button>
        </Link>
      </div>
    </header>
  );
}
