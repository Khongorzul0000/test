import { FaStar } from "react-icons/fa";

export const Review = () => {
  return (
    <div className="center">
      <div className="square">
        <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="text">
        Teamwork has the best balance of functionality, price and ease of use...The learning curve is shallow which means people actually use it.
        </div>
        <div className="ar">
          <img
            className="img"
            src="https://images.thestar.com/y3cQGmH9MDjW46O1p0CyMJZ15qY=/1086x814/smart/filters:cb(1634678097416)/https://www.thestar.com/content/dam/thestar/opinion/contributors/2021/10/19/you-can-say-woman-and-we-can-say-person/florence_ashley.jpg"
          ></img>
          <p>Adam Foale</p>
        </div>
      </div>
    </div>
  );
};
