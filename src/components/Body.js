import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const swiggyApiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    const data = await fetch(`https://proxy.corsfix.com/?${swiggyApiUrl}`);

    const json = await data.json();

    const restaurants = json?.data?.cards.find((item) =>
      item?.card?.card?.id?.includes("restaurant_grid")
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResListData(restaurants);

    setFilteredResList(restaurants);
  };

  const handleSearch = () => {
    const filteredList = resListData.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResList(filteredList);
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const checkOnlineStatus = useOnlineStatus();

  if (checkOnlineStatus === false) return <Offline />;

  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={handleSearchText}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resListData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
          <Link
            to={"/restaurants/" + res?.info?.id}
            key={res?.info?.id}
            className="restaurant-link"
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
