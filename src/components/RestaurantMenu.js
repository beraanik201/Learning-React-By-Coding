import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU + resId);
      const json = await data.json();

      const menuData = json?.data?.cards
        ?.find((obj) => obj?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (obj) =>
            obj?.card?.card["@type"]?.includes("ItemCategory") ||
            obj?.card?.card["@type"]?.includes("NestedItemCategory")
        );

      const organisedMenuData = menuData?.map((item) => {
        const type = item?.card?.card["@type"];
        const title = item?.card?.card?.title;
        const itemCards = item?.card?.card?.itemCards || [];
        const categories = item?.card?.card?.categories || [];

        if (type?.includes("NestedItemCategory")) {
          return {
            title,
            type: "nested",
            categories: categories.map((subCategories) => {
              return {
                title: subCategories?.title,
                itemCards: subCategories?.itemCards,
              };
            }),
          };
        } else {
          return {
            title,
            type: "item",
            itemCards,
          };
        }
      });

      const restaurentMenu = json?.data?.cards?.find((item) =>
        item?.card?.card["@type"]?.includes("food.v2.Restaurant")
      );

      const restaurantInfo = restaurentMenu?.card?.card?.info;

      setResInfo(restaurantInfo);

      setResMenu(organisedMenuData);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo;
  const { deliveryTime } = resInfo?.sla;

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating} ⭐</p>
      <p>Delivery Time: {deliveryTime} mins</p>

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
