import React, { useState } from 'react';

import { UIScoreCard, UITeamChips } from '../../Components';

import { soccerData } from '../../utils/data';

// Styles
import './scorecard.modules.css';

const Scorecard = () => {
  const [currTeam, setCurrTeam] = useState('enfuego');

  const handleShowStat = (value) => setCurrTeam(value);

  return (
    <div className='container'>
      <h2 className='main__heading'>Teams</h2>
      <UITeamChips currTeam={currTeam} handleShowStat={handleShowStat} />

      <h2 className='main__heading'>Scorecard</h2>
      <section className='score__cards'>
        {soccerData[currTeam]?.upcoming_matches?.map((team) => {
          return (
            <UIScoreCard
              team={team}
              homeTeam={soccerData[currTeam].team_name}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Scorecard;
