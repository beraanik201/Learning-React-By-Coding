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
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white py-6 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-3 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
            value={searchText}
            onChange={handleSearchText}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-md shadow-md transition-all duration-200 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-100 hover:bg-gray-200 px-5 py-2 font-semibold rounded-md shadow-sm border border-gray-300 transition-all duration-200 cursor-pointer"
          onClick={() => {
            const filteredList = resListData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredResList(filteredList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 place-items-center">
        {filteredResList.map((res) => (
          <Link
            to={"/restaurants/" + res?.info?.id}
            key={res?.info?.id}
            className="w-full flex justify-center"
          >
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
