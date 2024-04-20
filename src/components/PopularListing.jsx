import popularData from "./popularListingData";
import icon from "../assets/Arrow 1.svg";
import iconv from "../assets/iconoir_verified-user.png";
export default function Popular() {
  return (
    <section>
      <div className="flex justify-between px-4 py-3 ">
        <h1 className="text-popular-colour font-semibold text-3xl">
          Popular Listing
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
      <div className="flex justify-between py-8 px-6 gap-4">
        {popularData.map((listings) => (
          <div className="bg-service-background rounded border-popular-colour px-2 py-6 ">
            <div>
              <img src={listings.image} alt="popular listing" />
            </div>
            <div className="px-2 py-4">
              <p className="text-title-colour">{listings.title}</p>
              <small className="text-popular-colour text-base font-normal">
                {listings.description}
              </small>
              <button className="flex items-center text-text bg-popular-colour py-1 px-1  rounded border-none font-light text-xs ">
                {" "}
                <img className="w-4 h-4" src={iconv} alt="" />
                VERIFIED ID
              </button>

              <div>
                <ul className="flex gap-1">
                  {listings.houseFeatures.map((item, index) => (
                    <li className="text-xs" key={index}>
                      {" "}
                      <small>{item} </small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
