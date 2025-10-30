import { useState } from "react";
import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, resMenu } = useRestaurantData(resId);
  const [openCategory, setOpenCategory] = useState(null);

  const handleAccordion = (title) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  if (!resInfo || resMenu.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, sla } = resInfo;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">{cuisines?.join(", ")}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-3">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            <p>{avgRating ?? 0} ⭐</p>
          </span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
            <p>Delivery Time: {sla?.deliveryTime ?? 0} mins</p>
          </span>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
            <p>{costForTwoMessage}</p>
          </span>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center text-gray-800 tracking-wide drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] py-4">
        Menu
      </h2>

      <div className="space-y-8">
        {resMenu.map((category) => {
          const isOpen = openCategory === category.title;
          return (
            <div key={category.title}>
              <div
                className="flex items-center justify-between cursor-pointer bg-gray-50 px-4 py-2 rounded-lg border"
                onClick={() => handleAccordion(category.title)}
              >
                <span className="text-xl font-semibold">{category.title}</span>
                <button className="text-2xl font-bold cursor-pointer">
                  {isOpen ? "−" : "+"}
                </button>
              </div>
              {isOpen &&
                (category?.type === "item" ? (
                  <ItemCategory key={category?.title} data={category} />
                ) : (
                  <NestedItemCategory key={category?.title} data={category} />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
