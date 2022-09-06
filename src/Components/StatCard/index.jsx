import React from 'react';

import { SingleStat } from './SingleStat';

// Styles
import './statCard.modules.css';

const UIStatCard = ({ team }) => {
  return (
    <div className='card'>  
      <img src={team.avatar} alt='player-avatar' />
      <SingleStat heading='Name' label={team.player_name} />
      <SingleStat heading='Appearances' label={team.apperances} />
      <SingleStat heading='Goals' label={team.goals} />
      <SingleStat heading='Assists' label={team.assists} />
      <SingleStat heading='Cross Accuracy' label={team.cross_accuracy} />
      <SingleStat heading='Key passes' label={team.key_passes} />
      <SingleStat heading='Tackles' label={team.tackles} />
    </div>
  );
};

export default UIStatCard;
