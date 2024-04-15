import  logo  from "../assets/Logo.svg";
import  logo2  from "../assets/Home Flex.png";
export default function Header()  {
  return (
    <header className ="flex bg-primary justify-between items-center p-8 h-10 ">
      <div className="flex items-center justify-center flex-col h-12">
        <img className="w-16 h-12 " src={logo} alt="homeflex logo" />
        <img className=" w-16 h-12" src={logo2} alt="homeflex logo" />
        <span className="text-sm text-text font-serif">Accomodation-Loan </span>
      </div>
      <div className=" flex items-center gap-2">
        <ul className="flex justify-between gap-5">
          <li className="list-none">
            <a className="text-base text-text no-underline" href="#/loan">Loan transaction</a>
          </li>
          <li className="list-none">
            <a className=" font-medium text-base text-text no-underline " href="#/list">List a property</a>
          </li>
        </ul>
        <button className="py-1 px-3 rounded text-blue bg-white border-none text-primary  cursor-pointer tracking-wider font-normal text-base">Sign up</button>
</div>
    </header>
  );
}
