import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="w-60 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
      <img
        className="w-full h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
        <div className="flex justify-between items-center text-sm mt-2 text-gray-700">
          <span className="font-semibold text-green-600">⭐ {avgRating}</span>
          <span>{costForTwo}</span>
          <span>{deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
