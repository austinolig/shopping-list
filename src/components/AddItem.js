import { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [important, setImportant] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [formVisibility, setFormVisibility] = useState(true);

  return (
    <>
      <button
        className="btn btnAdd"
        style={{
          backgroundColor: !formVisibility && "red",
        }}
        onClick={() => {
          setFormVisibility(!formVisibility);
        }}
      >
        {/* // GRID THE FORM OR SM */}
        {formVisibility ? "Add" : "Close"}
      </button>
      <form
        style={{ display: formVisibility ? "none" : "flex" }}
        className="form-add-item"
        onSubmit={(e) => {
          e.preventDefault();
          if (name === "") {
            alert("Please enter an item...");
            return;
          } else if (!Number.isInteger(quantity)) {
            alert("Please enter a quantity greater than 0...");
            setQuantity(1);
            return;
          }
          setName("");
          setImportant(false);
          setQuantity(1);
          onAdd({ name, important, quantity });
        }}
      >
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          min={1}
          step={1}
          onChange={(e) => {
            if (isNaN(parseInt(e.target.value))) setQuantity("");
            else {
              const quantityInput = Math.floor(e.target.value);
              setQuantity(quantityInput);
            }
          }}
        />
        <label>Important?</label>
        <input
          type="checkbox"
          checked={important}
          value={important}
          onChange={(e) => {
            setImportant(e.currentTarget.checked);
          }}
        />
        <input type="submit" className="btn" />
      </form>
    </>
  );
};

export default AddItem;
