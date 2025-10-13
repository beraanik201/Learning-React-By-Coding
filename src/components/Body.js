import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListData, setResListData] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const swiggyApiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    const data = await fetch(`https://proxy.corsfix.com/?${swiggyApiUrl}`);

    const jsonData = await data.json();

    setResListData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    console.log(jsonData);
  };

  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resListData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResListData(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resListData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
