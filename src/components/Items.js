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
          {items
            .filter((item) => item.important === true && console.log(item))
            .map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              );
            })}
          {items
            .filter((item) => item.important === false)
            .map((item) => {
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
