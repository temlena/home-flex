import icon from "../assets/+.png";

export default function Questions() {
  return (
    <section className="bg-question-background px-8 py-6">
      <div className="">
        <h1 className="text-primary font-bold text-2xl">
          Frequently asked questions
        </h1>
        <p className=" text-question-primary">
          Click to see answers to some pressing qustions
        </p>
      </div>
      <div className="flex">
        <ul className="flex justify-between gap-4">
          <li>General</li>{" "}
          <button>
            <img src={icon} alt="" />
          </button>
          <li>Property Owner</li>{" "}
          <button>
            <img src={icon} alt="" />
          </button>
          <li>Tenant</li>{" "}
          <button>
            <img src={icon} alt="" />
          </button>
          <li>Payment</li>{" "}
          <button>
            <img src={icon} alt="" />
          </button>
        </ul>
      </div>
    </section>
  );
}
