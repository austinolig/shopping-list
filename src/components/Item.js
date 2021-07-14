import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { useState } from "react";

const Item = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    important: item.important,
  });
  // console.log(currentItem);

  const updateItem = (e) => {
    const { name, value } = e.target;
    setCurrentItem((currentItem) => ({
      ...currentItem,
      [name]: value,
    }));
  };

  return (
    <tr
      className="item"
      style={{ fontWeight: currentItem.important && "bold" }}
    >
      <td>
        {isEditing ? (
          <input
            type="number"
            name="quantity"
            value={currentItem.quantity}
            onChange={updateItem}
          ></input>
        ) : (
          currentItem.quantity
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={currentItem.name}
            onChange={updateItem}
          ></input>
        ) : (
          currentItem.name
        )}
      </td>
      <td>
        {!isEditing ? (
          <FaEdit
            onClick={() => {
              setIsEditing(!isEditing);

              // onUpdate(item.id, item);
              //ON CLICK CHANGE TO SAVE ICON OR SUM
            }}
            style={{ color: "blue" }}
          />
        ) : (
          <FaCheck
            onClick={() => {
              setIsEditing(!isEditing);
              if (
                item.quantity !== currentItem.quantity ||
                item.name !== currentItem.name
              ) {
                onUpdate(item.id, currentItem);
              }
            }}
            style={{ color: "green" }}
          />
        )}
        <FaTrash
          onClick={() => {
            onDelete(item.id);
          }}
          style={{ color: "red" }}
        />
      </td>
    </tr>
  );
};

export default Item;
