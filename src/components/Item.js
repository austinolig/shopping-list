import { FiXSquare, FiEdit3 } from "react-icons/fi";
import { useState } from "react";

const Item = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(item.name);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  // const [itemImportant, setItemImportant] = useState(item.important);

  return (
    <tr className="item" style={{ fontWeight: item.important && "bold" }}>
      <td>
        {isEditing ? (
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => {
              console.log(`New value = ${e.target.value}`);
              setItemQuantity(e.target.value);
            }}
          ></input>
        ) : (
          itemQuantity
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={itemName}
            onChange={(e) => {
              console.log(`New value = ${e.target.value}`);
              setItemName(e.target.value);
            }}
          ></input>
        ) : (
          itemName
        )}
      </td>
      <td>
        <FiEdit3
          onClick={() => {
            setIsEditing(!isEditing);
            // onUpdate(item.id, item);
            //ON CLICK CHANGE TO SAVE ICON OR SUM
          }}
          style={{ color: "grey" }}
        />
        <FiXSquare
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
