import React from 'react';
import { Outlet } from 'react-router-dom';
import { UISidebar } from '../Components';

// Styles
import './../styles/main.css';

const Wrapper = () => {
  return (
    <main className='wrapper'>
      <aside className='column-one'>
        <UISidebar />
      </aside>

      <section className='column-two'>
        <Outlet />
      </section>
    </main>
  );
};

export default Wrapper;
