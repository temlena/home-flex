import homeflex from "../assets/white varaint logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex bg-primary justify-between items-center p-5 h-26 ">
      <Link to="/">
        {" "}
        <img className="w-21 h-16" src={homeflex} alt="homeflex logo" />
      </Link>

      <div className=" flex items-center gap-2">
        <ul className="flex justify-between gap-9">
          <li className="list-none">
            <Link
              className="text-base text-text no-underline  hover:text-popular-colour hover:bg-white py-2 px-2 rounded"
              to="/"
            >
              Our services
            </Link>
          </li>
          <li className="list-none">
            <a
              className=" font-medium text-base text-text no-underline hover:text-popular-colour mr-9 hover:bg-white py-2 px-2 rounded"
              href="/AboutHomeflexPage"
            >
              About us
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
