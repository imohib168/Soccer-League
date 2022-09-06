import React from 'react';
import { SingleStat } from '../StatCard/SingleStat';

// Styles
import './scorecard.modules.css';

const UIScoreCard = ({ team, homeTeam }) => {
  const { matchResult } = team;

  return (
    <div className='scorecard'>
      <div className='opponent'>
        <span className='vs'>VS</span>
        <span className='teamname'>{team.opponent}</span>
      </div>

      <SingleStat
        heading='Goal Keeper Save'
        label={matchResult.goalKeeperSave}
      />
      <SingleStat heading='Highest Scorer' label={matchResult.highestScorer} />
      <SingleStat heading='Most Assists' label={matchResult.mostAssists} />
      <SingleStat heading='Best Defence' label={matchResult.bestDefence} />
    </div>
  );
};

export default UIScoreCard;
