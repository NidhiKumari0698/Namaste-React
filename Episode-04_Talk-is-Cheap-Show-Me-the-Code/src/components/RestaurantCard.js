import {RES_LOGO} from "../utils/constant"

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          alt="res-logo"
          src={RES_LOGO+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4 style={{overflowWrap: "break-word"}}>{(cuisines).join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime}</h4>
      </div>
    );
  };

  export default RestaurantCard;