import React from 'react';
import { Link } from 'react-router-dom';
import ErrorSVG from '../../assets/404.svg';

import './error.modules.css';

const Error = () => {
  return (
    <div className='error'>
      {/* <ErrorSVG /> */}
      {/* <img src={<ErrorSVG />} alt='' /> */}
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default Error;
