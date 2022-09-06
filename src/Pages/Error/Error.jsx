import React from 'react';
import { Link } from 'react-router-dom';

import './error.modules.css';

const Error = () => {
  return (
    <div className='error'>
      <h1>Error 404</h1>
      <Link className='link' to='/'>
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
