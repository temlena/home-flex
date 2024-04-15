import featureData from "../components/featureData.js"
import icon from "../assets/Arrow 1.svg"
import iconv from "../assets/verified-icon.svg"

export default function Features()  {
    return (
      <>
      <section className=" px-10 py-4 bg-service-background rounded">
        <div className="flex justify-between">
        <h1 className=" text-popular-colour font-semibold text-3xl">Feature Listing </h1>
        <div className="flex gap-2 items-center">
        <a className="text-popular-colour text-sm font-semibold" href="#/listings">See More</a>
        <img className="w-4 cursor-pointer" src={icon} alt="arrow-icon" />
        </div>
        </div>
        
      <div className="flex justify-between py-8 ">
                {featureData.map((feature) => (
                    <div className="bg-text rounded border-popular-colour px-2 py-6">
                        <div className="">
                            <img  className="w-30 h-50"src={feature.image} alt="house listing"/>
                        </div>
                        <div className="flex justify-between">
                          <img src={feature.feature} alt=" camera-icon" />
                          <img src={feature.likes} alt="like-icon" />
                          </div> 
                          <button className="text-text bg-popular-colour py-1 px-2 rounded border-none font-normal text-xs flex items-center"> <img className="w-4 h-4" src={iconv} alt="" />VERIFIED ID</button>

                        <p className="text-title-colour">{feature.title}</p>
                        <small className="text-popular-colour text-base font-normal">{feature.description}</small>
                        <div>
                        <ul className="flex gap-1">
                          {feature.houseFeatures.map((item,index)=>(
                            <li className="text-xs" key={index}>{item}</li>
                          ))}
                          
                        </ul>
                        </div>
                    </div>
               ))}
            </div>

      </section>
      </>
      

    );
  }
  