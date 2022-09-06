import React from 'react';
import { SingleStat } from '../StatCard/SingleStat';

import Flags from '../../assets/flags-1.jpg';

// Styles
import './performance.modules.css';

const UIPerformanceCard = ({ team }) => {
  console.log('TEAM', team);
  return (
    <div className='team-performance-card'>
      <div className='team__flag'>
        <img src={Flags} alt='flags' />
      </div>

      <div className='team__stats'>
        <SingleStat heading='Total Goals' label={team.goals} />
        <SingleStat heading='Shots PG' label={team.shotspg} />
        <SingleStat heading='Discipline' label={team.discipline} />
        <SingleStat heading='Possession' label={team.possession} />
        <SingleStat heading='Pass' label={team.pass} />
        <SingleStat heading='Aerials Won' label={team.aerialsWon} />
        <SingleStat heading='Rating' label={team.rating} />
      </div>
    </div>
  );
};

export default UIPerformanceCard;
