import MenuItem from "./MenuItem";

const NestedItemCategory = (props) => {
  const { title, categories } = props.data;
  return (
    <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6 hover:shadow-md transition">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
        {title}
      </h2>
      {categories?.map((subcategory) => (
        <div key={subcategory?.title} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            {subcategory?.title}
          </h3>
          <ul className="space-y-4">
            {subcategory?.itemCards?.map((item) => (
              <MenuItem
                key={item?.card?.info?.id}
                menuInfo={item?.card?.info}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NestedItemCategory;
