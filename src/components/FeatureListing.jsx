import featureData from "../components/featureData.js";
import icon from "../assets/Arrow 1.svg";
import iconv from "../assets/iconoir_verified-user.png";

export default function Features() {
  return (
    <>
      <section className=" px-10 py-4 bg-service-background rounded">
        <div className="flex justify-between">
          <h1 className=" text-popular-colour font-semibold text-3xl">
            Feature Listing{" "}
          </h1>
          <div className="flex gap-2 items-center">
            <a
              className="text-popular-colour text-sm font-semibold"
              href="#/listings"
            >
              See More
            </a>
            <img className="w-4 cursor-pointer" src={icon} alt="arrow-icon" />
          </div>
        </div>

        <div className="flex justify-between py-8 gap-4 ">
          {featureData.map((feature) => (
            <div className="rounded p-2 w-80 border-green ">
              <div className="">
                <img
                  className="w-80 h-60"
                  src={feature.image}
                  alt="house listing"
                />
              </div>
              <div className="bg-text p-1 ">
              <div className="flex justify-between">
                <img src={feature.feature} alt=" camera-icon" />
                <img className="w-4" src={feature.likes} alt="like-icon" />
              </div>
              <div className="py-1">
              <button className="text-text bg-popular-colour py-1 px-2 rounded border-none font-normal text-xs flex items-center">
                <img className="w-4 h-4" src={iconv} alt="" />
                VERIFIED ID
              </button>
                <p className="text-title-colour">{feature.title}</p>
                <small className="text-popular-colour text-base font-normal">
                  {feature.description}
                </small>
          
                <ul className="flex gap-1 ">
                  {feature.houseFeatures.map((item, index) => (
                    <li className="text-xs" key={index}>
                       <small>{item}</small>
                    </li>
                  ))}
                </ul>
                </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
