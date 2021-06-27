import { FiXSquare, FiEdit3 } from "react-icons/fi";

const Item = ({ item, onDelete, onUpdate }) => {
  return (
    <tr className="item" style={{ fontWeight: item.important && "bold" }}>
      <td>{item.quantity}</td>
      <td>{item.name}</td>
      <td>
        <FiEdit3
          onClick={() => {
            onUpdate(item.id, item);
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
