import { FaTrash, FaEdit, FaCheck, FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

const Item = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: item._id,
    name: item.name,
    quantity: item.quantity,
    important: item.important,
  });

  const updateItem = (e) => {
    const { name, value } = e.target;
    setCurrentItem((currentItem) => ({
      ...currentItem,
      [name]: value,
    }));
  };

  const toggleImportant = () => {
    setCurrentItem((currentItem) => ({
      ...currentItem,
      important: !currentItem.important,
    }));

    onUpdate(currentItem.id, {
      ...currentItem,
      important: !currentItem.important,
    });
  };

  return (
    <tr
      className="item"
      style={{ fontWeight: currentItem.important && "bold" }}
    >
      <td>
        {currentItem.important ? (
          <FaStar onClick={toggleImportant} />
        ) : (
          <FaRegStar onClick={toggleImportant} />
        )}
      </td>
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
      <td className="tdActions">
        {!isEditing ? (
          <>
            <FaEdit
              onClick={() => {
                setIsEditing(!isEditing);
              }}
              style={{ color: "blue" }}
            />
            <FaTrash
              onClick={() => {
                onDelete(currentItem.id);
              }}
              style={{ color: "red" }}
            />
          </>
        ) : (
          <FaCheck
            onClick={() => {
              setIsEditing(!isEditing);
              if (
                item.quantity !== currentItem.quantity ||
                item.name !== currentItem.name
              ) {
                onUpdate(currentItem.id, currentItem);
              }
            }}
            style={{ color: "green" }}
          />
        )}
      </td>
    </tr>
  );
};

export default Item;
