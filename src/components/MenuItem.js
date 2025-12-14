import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";

const MenuItem = (props) => {
  const { name, description, price, defaultPrice, imageId } = props?.menuInfo;
  const displayPrice = price || defaultPrice;

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    //dispatch an action to add item to cart
    dispatch(addItem(item));
  };

  return (
    <div className="menuItem-container">
      <div>
        <li>
          <h4>{name}</h4>
          {displayPrice && <span>Rs {(displayPrice / 100)?.toFixed(2)}</span>}
          {description && <p>{description}</p>}
        </li>
      </div>
      <div>
        {imageId && (
          <img src={RESTAURANT_MENU_IMAGE_URL + imageId} alt={name} />
        )}
        <button
          onClick={() => handleAddToCart(props.menuInfo)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md mt-2 cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
