import React from 'react';
import { soccerData } from '../../utils/data';

const UITeamChips = ({ currTeam, handleShowStat }) => {
  return (
    <section>
      {Object.entries(soccerData).map(([key, value]) => (
        <button
          key={key}
          type='button'
          className={`chip ${key == currTeam ? 'active-team' : ''}`}
          onClick={() => handleShowStat(key)}
        >
          {value.team_name}
        </button>
      ))}
    </section>
  );
};

export default UITeamChips;
