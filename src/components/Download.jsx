import PhoneImage from "../assets/iPhone 15 Pro.png";
import appLogo from "../assets/app-store 1.svg";
import playLogo from "../assets/google-play 1.svg";
export default function Download() {
  return (
    <section className="px-32 py-16">
      <div className="flex justify-center  items-center">
        <div className="w-1/2 p-4">
          <h1 className="text-4xl font-bold">
            Download our mobile application for FREE!
          </h1>

          <div className="mt-4">
            <button>
              {" "}
              <img src={playLogo} alt="playstore logo" />
            </button>
            <button>
              {" "}
              <img src={appLogo} alt="appstore logo" />
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={PhoneImage} alt="mobile-phone" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center text-center bg-question-primary py-20 px-6  rounded-tl-lg rounded-br-lg text-text w-96 h-24">
          <div>
            <h4 className="font-medium text-xl">
              Subscribe to our newsletters
            </h4>
            <p className="text-sm font-light">
              Stay connected with some property searching tips and tricks
            </p>
          </div>
          <div className="w-96 p-4">
            <input
              className="px-4 py-1 text-sm w-3/4"
              type="email outline-0 "
              placeholder="Enter your email address"
            />
            <button className="py-1 px-2 rounded text-blue bg-primary border-none text-white  cursor-pointer tracking-wider font-normal text-sm w-1/4">
              Subscribe
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
