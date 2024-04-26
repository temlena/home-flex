import dashboardData from "./dashboardData.js";
import message from "../assets/message-icon.svg";
import notification from "../assets/Bell_Notification.svg";
import checkbox from "../assets/Interface.svg";
export default function Dashboard() {
  return (
    <div className="bg-text px-16 py-8">
      <div className="p-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-2xl">
            Hello Evangeline! Welcome Back
          </h1>
          <p className="font-normal text-xl">
            Your next payment of <span className="font-bold">10000</span> is
            scheduled for{" "}
            <span className="font-bold text-xl text-error"> May 29 2024</span>
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <img className="w-6" src={message} alt="message-icon" />
          <img className="w-6" src={notification} alt="bell-icon" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-text p-4 rounded bg-primary w-44 ">
          <p className="font-normal text-lg">All loan amount</p>
          <p className="font-normal text-2xl">#1,500,000</p>
        </div>
        <div className="text-primary p-4 rounded bg-dashboard w-44">
          <p className="font-normal text-lg">Amount paid</p>
          <p className="font-normal text-2xl">#1,500,000</p>
        </div>
        <div className="text-primary p-4 rounded bg-dashboard w-44">
          <p className="font-normal text-lg">Total loan</p>
          <p className="font-normal text-2xl">2</p>
        </div>
      </div>
      <table className="w-full mt-2">
        <tbody>
          {dashboardData.map((val, key) => {
            return (
              <tr key={key} className="p-4 m-5">
                <td className="">
                  {" "}
                  <img src={checkbox} alt="" />{" "}
                </td>
                <td className="p-4">{val.Date}</td>
                <td className="p-4">{val.Description}</td>
                <td className="p-4">{val.Info}</td>
                <td className="p-4">{val.Time}</td>
                <td className="p-4">{val.Amount}</td>
                <td
                  className={`${
                    val.Status === "Successful"
                      ? "text-popular-colour"
                      : "text-error"
                  } text-base font-normal`}
                >
                  {val.Status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
