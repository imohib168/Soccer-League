import React, { useState } from 'react';

import { UIPerformanceCard, UITeamChips } from '../../Components';

import { soccerData } from '../../utils/data';

// Styles
import './performance.modules.css';

const TeamsPerformance = () => {
  const [currTeam, setCurrTeam] = useState('enfuego');

  const handleShowStat = (value) => setCurrTeam(value);

  return (
    <div className='container team'>
      <h2 className='main__heading'>Teams</h2>
      <UITeamChips currTeam={currTeam} handleShowStat={handleShowStat} />

      <h2 className='main__heading'>Teams's Performance</h2>
      <section className='stat__cards'>
        {soccerData[currTeam]?.team_performance?.map((team) => {
          return <UIPerformanceCard team={team} />;
        })}
      </section>
    </div>
  );
};

export default TeamsPerformance;
