import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);
  const resMenu = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo;
  const { deliveryTime } = resInfo?.sla;

  return (
    <div className="menu">
      <h2>{name ?? ""}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating ?? 0} ⭐</p>
      <p>Delivery Time: {deliveryTime ?? 0} mins</p>

      <h1>Menu</h1>

      {resMenu.map((category) =>
        category?.type === "item" ? (
          <ItemCategory key={category?.title} data={category} />
        ) : (
          <NestedItemCategory key={category?.title} data={category} />
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
