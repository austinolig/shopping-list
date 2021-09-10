import Item from "./Item.js";

const Items = ({ items, onDelete, onUpdate }) => {
  return (
    <div className="itemsDiv">
      <table className="itemsTable">
        <thead>
          <tr>
            <th className="thImportant">Important</th>
            <th className="thQuantity">Quantity</th>
            <th className="thName">Name</th>
            <th className="thActions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <Item
                key={item._id}
                item={item}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
