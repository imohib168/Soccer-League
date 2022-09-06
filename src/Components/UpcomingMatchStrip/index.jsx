import React from 'react';

import { MdOutlineMapsHomeWork } from 'react-icons/md';

// Styles
import './strip.modules.css';

const UIStrip = ({ match, homeTeam }) => {
  return (
    <div className='strip' key={match.id}>
      <div className='strip__match-info'>
        <p className='home'>{homeTeam}</p>
        <p>VS</p>
        <p className='opponent'>{match.opponent}</p>
      </div>
      <div className='strip__time'>
        <p>{match.date}</p>
        <p>{match.time}</p>
      </div>

      <div className='strip__venue'>
        <MdOutlineMapsHomeWork /> {match.venue}
      </div>
    </div>
  );
};

export default UIStrip;
