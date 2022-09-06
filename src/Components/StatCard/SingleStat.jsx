import React from 'react';

export function SingleStat({ heading, label }) {
  return (
    <div className='stat'>
      <h4>{heading}</h4>
      <p>{label}</p>
    </div>
  );
}
