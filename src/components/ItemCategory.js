import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
  const { title, itemCards } = props.data;

  return (
    <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-5 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        {title}
      </h3>
      <ul className="space-y-4">
        {itemCards.map((item) => (
          <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info} />
        ))}
      </ul>
    </div>
  );
};

export default ItemCategory;
