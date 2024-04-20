import frameOne from "../assets/Frame-1.png";
import frameTwo from "../assets/Frame-2.png";
import frameThree from "../assets/Frame-3.png";

export default function Offers() {
  return (
    <>
      <div className="text-left px-8 py-6">
        <h4 className="text-primary text-3xl font-semibold">
          Rent without fret- worry free payments
        </h4>
        <p className="text-service font-normal">
          Our offerings are custom-made to fit your lifestyle and cater to your
          needs!
        </p>
      </div>
      <div className="flex items-center justify-center px-10 py-8 gap-4">
        <img src={frameOne} alt="frame-one" />
        <img src={frameTwo} alt="frame-two" />
        <img src={frameThree} alt="frame-three" />
      </div>
    </>
  );
}
