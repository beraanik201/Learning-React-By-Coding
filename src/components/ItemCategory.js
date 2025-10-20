import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
  const { title, itemCards } = props.data;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {itemCards.map((item) => (
          <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info} />
        ))}
      </ul>
    </div>
  );
};

export default ItemCategory;
