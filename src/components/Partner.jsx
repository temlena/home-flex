import partner from "../assets/image 14.png";

export default function Partner() {
  return (
    <section className="bg-primary flex justify-around py-3 px-4s items-center ">
      <div className=" ">
        <h1 className="text-text font-bold text-3xl">
          Do you own a property?{" "}
        </h1>
        <h1 className="text-text font-medium text-2xl">
          Partner with us Today!!!
        </h1>
        <p className="text-text text-left text-sm font-normal my-6">
          Earn big in rental income from the best tenants in Nigeria
        </p>
        <button className="py-1 px-4 rounded bg-btn-primary border-none text-text cursor-pointer">
          Get Started
        </button>
      </div>
      <div>
        <img src={partner} alt="" />
      </div>
    </section>
  );
}
