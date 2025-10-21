import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
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

      setResMenu(organisedMenuData);
    } catch (err) {
      console.log(err.message);
    }
  };
  return resMenu;
};

export default useRestaurantMenu;
