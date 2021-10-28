import { Link, useParams } from 'react-router-dom';

import './HomeHeader.css';

const HomeHeader = () => {
  return (
    <div className='headerA'>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default HomeHeader;