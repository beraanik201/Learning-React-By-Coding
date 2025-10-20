import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";

const MenuItem = (props) => {
  const { name, description, price, defaultPrice, imageId } = props?.menuInfo;
  const displayPrice = price || defaultPrice;
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
      </div>
    </div>
  );
};

export default MenuItem;
