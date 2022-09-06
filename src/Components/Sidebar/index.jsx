import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Mock Data
import { menuItems } from './mock-data';

// Styles
import './sidebar.modules.css';

const UISidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className='sidebar'>
      <h2 className='sidebar__brand'>Soccer</h2>

      <ul className='sidebar__menu'>
        {menuItems.map(({ id, route, label, icon: Icon }) => (
          <li
            className={`sidebar__menu-item ${
              pathname.includes(route) ? 'active' : ''
            }`}
            key={id}
          >
            <Icon fontSize='24px' />
            <Link to={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UISidebar;
