import React from "react";

const List = props => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onSelectItem
  } = props;
  return (
    <>
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            key={index}
            className={
              item.name === selectedItem.name
                ? "list-group-item active"
                : "list-group-item "
            }
            onClick={() => onSelectItem(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </>
  );
};
//add default props after the creation of the component
List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default List;