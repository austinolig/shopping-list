import AddItem from "./AddItem.js";

const Header = ({ onAdd }) => {
  return (
    <header>
      <h1>Shopping List</h1>
      <AddItem onAdd={onAdd} />
    </header>
  );
};

export default Header;
