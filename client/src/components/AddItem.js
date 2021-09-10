import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [important, setImportant] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [formVisibility, setFormVisibility] = useState(true);

  return (
    <div className="formArea">
      <button
        className="btn btnAdd"
        style={{
          backgroundColor: !formVisibility && "red",
        }}
        onClick={() => {
          setFormVisibility(!formVisibility);
        }}
      >
        {formVisibility ? <FaPlus /> : <FaTimes />}
      </button>
      <form
        style={{ display: formVisibility && "none" }}
        className="formAddItem"
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
        <div className="formInputName">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="formInputQuantity">
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
        </div>
        <div className="formInputImportant">
          <label>Important</label>
          <input
            type="checkbox"
            checked={important}
            value={important}
            onChange={(e) => {
              setImportant(e.currentTarget.checked);
            }}
          />
        </div>

        <input type="submit" className="btn btnSubmit" />
      </form>
    </div>
  );
};

export default AddItem;
