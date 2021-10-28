import { NavLink, useParams } from 'react-router-dom';
import {Navbar, Container} from 'react-bootstrap'
import './Header.css';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  fontWeight: 800,
  color: 'blue',
  ':hover': {
    color: 'yellow'
  },
};



const Titles = ({ page }) => {
  const title = page;
  return <NavLink activeStyle={{ color: 'red' }} style={linkStyle} to={`/${page}`}>{title}</NavLink>
};

const Header = () => {
  
  const { page } = useParams();

  return (
    <Navbar>
    <Container>
    <div class='header'>
      <Titles page='Home' selected={page === 'Home'} />
      <Titles page='Create Account' selected={page === 'Create Account'} />
      <Titles page='Withdraw' selected={page === 'Withdraw'} />
      <Titles page='Deposit' selected={page === 'Deposit'} />
      <Titles page='All Data' selected={page === 'All Data'} />
    </div>
    </Container>
    </Navbar>
  );
};

export default Header;