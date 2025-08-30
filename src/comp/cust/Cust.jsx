import "./Cust.scss";
import data from "../../data/targetedCustomers";

export const Cust = () => {
  return (
    <div className="cust">
        <h1>Our Targeted Customers</h1>
      <div className="cont">
        {data.map((item) => {
          return (
            <div className="cust-item">
              <i className={item.iconClassName}></i>
              <h5>{item.enName}</h5>
              <h5 className="ar">{item.arName}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cust;
