import { States, bedroom, maxAmount,minAmount,type } from "../components/Data";
export default function Hero()  {
  return (
    <>
    <div className="flex items-center justify-center flex-col bg-hero-bg h-[80vh] bg-cover  py-5 px-8">
    
    <h1 className="text-text text-5xl font-bold ">Find your next home</h1>
    <p className="text-text text-xl font-medium">Achieving the ideal home is feasible with flexible payment options</p>
      <div className="flex">
      <select name="" id="">
        {States.map((item, index)=>(
          <option key={index}>
            {item}
            </option>
        ))}
      </select>
      <select name="" id="">
      {type.map((item, index)=>(
          <option key={index}>
            {item}
            </option>
        ))}
      </select>

      <select name="" id="">
      {bedroom.map((item, index)=>(
          <option key={index}>
            {item}
            </option>
        ))}
      </select>
      <select name="" id="">
      {maxAmount.map((item, index)=>(
          <option key={index}>
            {item}
            </option>
      ))}
      </select>
      <select name="" id="">
         {minAmount.map((item, index)=>(
          <option key={index}>
            {item}
            </option>
         ))}
      </select>
      <button className=" py-1 px-3 rounded text-blue bg-primary border-none text-text  cursor-pointer tracking-wider font-normal text-base">search</button>
      </div>
    </div>
    </>
  );
}