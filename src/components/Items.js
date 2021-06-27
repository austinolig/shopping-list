import Item from "./Item.js";

const Items = ({ items, onDelete, onUpdate }) => {
  return (
    <div className="itemsDiv">
      <table className="itemsTable">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
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
