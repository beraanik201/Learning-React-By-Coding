import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantData = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU + resId + ".json");
      const json = await data.json();

      const restaurantInfo =
        json?.data?.cards?.find((item) =>
          item?.card?.card["@type"]?.includes("food.v2.Restaurant")
        )?.card?.card?.info || null;

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
            categories: categories.map((sub) => ({
              title: sub?.title,
              itemCards: sub?.itemCards,
            })),
          };
        } else {
          return { title, type: "item", itemCards };
        }
      });

      setResInfo(restaurantInfo);
      setResMenu(organisedMenuData || []);
    } catch (err) {
      console.error("Error fetching restaurant data:", err.message);
    }
  };

  return { resInfo, resMenu };
};

export default useRestaurantData;
