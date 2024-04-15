import  logo  from "../assets/Logo.svg";
import  logo2  from "../assets/Home Flex.png";
import  appLogo  from "../assets/app-store 1.svg";
import  playLogo from "../assets/google-play 1.svg";
import  facebook  from "../assets/facebook.svg";
import  instagram  from "../assets/instagram.svg";
import  twitter  from "../assets/twitter.svg";
import  linkedin from "../assets/linkedin.png";
import  arrow from "../assets/Group.png";

export default function Footer()  {
    return (
        <footer className=" px-10 py-8 bg-primary text-text">
            <div className="flex px-6 justify-between items-center">
            <div>
        <img src={logo} alt="homeflex logo" />
        <img src={logo2} alt="homeflex logo" />
      </div>
 <div className=" font-normal text-sm">
    <ul>
        <li className="my-1">
            <a href="#/About"> About us</a>
        </li>
        <li className="my-1"><a href="#/About">About Homeflex</a></li>
        <li className="my-1"><a href="#/terms">Terms and conditions</a></li>
        <li className="my-1"><a href="#/privacy policy">Privacy policy</a></li>
        <li><a href="#/loan policy">Loan policy</a></li>
    </ul>
      </div>
      <div className="flex justify-center flex-col items-center gap-1">
     <button> <img className="w-20" src={playLogo} alt="playstore logo" /></button>
      <button>  <img className="w-20" src={appLogo} alt="appstore logo" /></button>
      </div>
      <div className="my-4 font-normal text-sm">
        <ul>
      <li className="my-1" ><a href="#/About">Support</a></li>
        <li className="my-1"><a href="#/conntact">Contact us</a></li>
        <li className="my-1"><a href="#/faq">FAQ</a></li>
        <li><a href="#/email">Email</a></li>
        </ul>
      </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
        <p className="font-normal text-sm"> © 2024 Homeflex.All right reserved.</p>
        </div>
        <div className="flex gap-3"> 
         <img className="w-5" src={facebook} alt="facebook logo" />
        <img className="w-5" src={instagram} alt="instagram logo" />
        <img className="w-5" src={twitter} alt="twitter logo" />
        <img className="w-5" src={linkedin} alt="linkedin logo" /> 
        <img className="w-5" src={arrow} alt="arrow icon" /> 
        </div>
      </div>
        </footer>
     
    );
  }