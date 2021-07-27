const Footer = ({ onPress }) => {
  return (
    <footer>
      {/* <a href="/about"> */}
      <button onClick={onPress} className="btn btnAbout">
        About
      </button>
      {/* </a> */}
      <p>&copy; 2021 Austin Oligario</p>
    </footer>
  );
};

export default Footer;
