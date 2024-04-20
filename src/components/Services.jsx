import home from "../assets/home-icon.svg";
import verified from "../assets/verified-icon.svg";
import move from "../assets/handcoin.svg";
import payment from "../assets/fluent_payment-20-regular.svg";

export default function Services() {
  return (
    <section className="bg-service-background">
      <div className="text-left px-10 py-8 text-primary ">
        <h1 className="font-semibold text-3xl">
          We furnish you with everything necessary for your home search.
        </h1>
        <p className="text-xs  text-service">
          Our services are simplified to customise your search for a home
        </p>
      </div>
      <section className="px-14 py-8">
        <div className="flex justify-center items-center gap-8">
          <div className="flex items-center flex-col  bg-service-card rounded py-2 px-4 h-60 w-60">
            <img className="w-12 h-12" src={home} alt="home-icon" />
            <h2 className="text-primary text-x my-2">Effortless home hunt</h2>
            <p className="text-center text-xs  text-service">
              We ensure a hassle-free and smooth home search process, Home flex
              provides you an array of options to make your home search more
              seamless.
            </p>
          </div>
          <div className="flex items-center flex-col bg-service-card rounded py-2 px-4 h-60 w-60">
            <img className="w-12 h-12" src={verified} alt="verified-icon" />
            <h2 className="text-primary text-x my-2">Verify property owner</h2>
            <p className="text-center text-xs  text-service">
              {" "}
              Our services comes without agent fees or commission, eliminating
              the middlemen, you deal directly with us, ensuring transparency
              and cost effectiveness in your transactions.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 my-8">
          <div className="flex items-center flex-col bg-service-card rounded py-2 px-4 h-60 w-60">
            <img className="w-12 h-12" src={move} alt="hand-icon" />
            <h2 className="text-primary text-x my-2">Move-in Made Easy</h2>
            <p className="text-center text-xs text-service">
              Skip the upfront burden, our loan options help ease the financial
              strain of hefty initial rental payment, making housing more
              accessible
            </p>
          </div>
          <div className="flex items-center flex-col bg-service-card rounded py-2 px-4 h-60 w-60">
            <img className="w-12 h-12" src={payment} alt="payment-icon" />
            <h2 className="text-primary text-x my-2">Rent on Your Term</h2>
            <p className="text-center text-xs  text-service">
              Our tailor repayment plans accommodate diverse financial
              situations, ensuring flexibility and convenience for each
              individual.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
