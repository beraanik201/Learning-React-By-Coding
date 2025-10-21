import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU + resId);
      const json = await data.json();

      setResInfo(json);

      const restaurentMenu = json?.data?.cards?.find((item) =>
        item?.card?.card["@type"]?.includes("food.v2.Restaurant")
      );

      const restaurantInfo = restaurentMenu?.card?.card?.info;

      setResInfo(restaurantInfo);
    } catch (err) {
      console.log(err.message);
    }
  };
  return resInfo;
};

export default useRestaurantInfo;
