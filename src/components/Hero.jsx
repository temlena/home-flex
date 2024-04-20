import {
  States,
  bedroom,
  maxAmount,
  minAmount,
  type,
} from "../components/Data";
export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-hero-bg h-[80vh] bg-cover  py-5 px-8">
        <h1 className="text-text text-5xl font-bold ">Find your next home</h1>
        <p className="text-text text-xl font-medium">
          Achieving the ideal home is feasible with flexible payment options
        </p>
        <form action="">
          <div className="flex">
            <select
              className=" border-black border-2 p-1"
              name=""
              id=""
              defaultValue=""
              required
            >
              <option value="hidden">select location </option>
              {States.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <select
              className=" border-black border-2 p-1"
              name=""
              id=""
              required
            >
              <option value="hidden">select type </option>
              {type.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>

            <select
              className=" border-black border-2 p-1"
              name=""
              id=""
              required
            >
              <option value="hidden">select bedroom </option>
              {bedroom.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <select
              className=" border-black border-2 p-1"
              name=""
              id=""
              required
            >
              <option value="hidden">select min </option>
              {minAmount.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <select
              className=" border-black border-2 p-1"
              name=""
              id=""
              required
            >
              <option value="hidden">select max </option>
              {maxAmount.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
            <button
              type="submit"
              className=" py-1 px-3 rounded text-blue bg-primary border-none text-text  cursor-pointer tracking-wider font-normal text-base"
            >
              search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
