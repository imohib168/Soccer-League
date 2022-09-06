import React, { useState } from 'react';

import { UIStatCard, UITeamChips } from '../../Components';

import { soccerData } from '../../utils/data';

// Styles
import './performance.modules.css';

const PlayersPerformance = () => {
  const [currTeam, setCurrTeam] = useState('enfuego');

  const handleShowStat = (value) => setCurrTeam(value);

  return (
    <div className='container team'>
      <h2 className='main__heading'>Teams</h2>
      <UITeamChips currTeam={currTeam} handleShowStat={handleShowStat} />

      <h2 className='main__heading'>Player's Information</h2>
      <section className='stat__cards'>
        {soccerData[currTeam]?.team_players?.map((team) => {
          return <UIStatCard team={team} />;
        })}
      </section>
    </div>
  );
};

export default PlayersPerformance;
