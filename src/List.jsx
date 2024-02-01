import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;

  itemList.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  itemList.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  itemList.sort((a, b) => a.calories - b.calories); // NUMERIC
  itemList.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

  const lowCalFruits = itemList.filter((a) => a.calories < 100);

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} has <b>{fruit.calories}</b> kcal
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
