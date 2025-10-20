import MenuItem from "./MenuItem";

const NestedItemCategory = (props) => {
  const { title, categories } = props.data;
  return (
    <div>
      <h2>{title}</h2>
      {categories?.map((subcategory) => (
        <div key={subcategory?.title}>
          <h3>{subcategory?.title}</h3>
          <ul>
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
