import { NavLink } from "react-router-dom";
const Header = () => {
  const headerStyles = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#fff',
    marginRight: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={headerStyles}>
      <div>
        <NavLink to="/about" >
        <span style={linkStyles}>About</span>
        </NavLink>
        <NavLink to="/contact" >
        <span style={linkStyles}>Contact</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
