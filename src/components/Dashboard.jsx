import dashboardData from "./dashboardData.js"
import message from "../assets/message-icon.svg"
import checkbox from "../assets/Interface.svg"
export default function Dashboard()  {
    return (
    <div className="bg-text px-16 py-8">
      <div className="p-4 flex justify-between">
        <div>
        <h1>Hello Evangeline! Welcome Back</h1>
      <p>Your next payment of <strong>10000</strong> is scheduled for <span className="text-red-800">May 29 2024</span></p>
        </div>
      
      <div>
        <img src={message} alt="message-icon" />
        <img src="" alt="bell-icon" />
      </div>
      </div>
      
     
      <div className="flex justify-between items-center">
        <div className="text-text p-4 rounded bg-primary w-40 h-20">
        <p className="font-bold">All loan amount</p>
<p>#1,500,000</p>
        </div>
        <div className="text-primary p-4 rounded bg-service-background w-40">
        <p className="font-bold">Amount paid</p>
<p>#1,500,000</p>
        </div>
        <div className="text-primary p-4 rounded bg-service-background w=40">
        <p className="font-bold">Total loan</p>
<p>2</p>
        </div>

      </div>
      <table className="w-full">
        <tbody>
          {dashboardData.map((val,key)=>{
           return (<tr key={key} className="p-4 m-5">
              <td className="" > <img src={checkbox} alt="" /> </td>
              <td className="p-4">{val.Date}</td>
              <td className="p-4">{val.Description}</td>
              <td className="p-4">{val.Info}</td>
              <td className="p-4">{val.Time}</td>
              <td className="p-4">{val.Amount}</td>
              <td className="p-4">{val.Status}</td>

            </tr>
          )})}
          
        </tbody>

      </table>
    </div>
    );
  }