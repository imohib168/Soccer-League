import React, { useState } from 'react';

import { UITeamChips, UIStrip } from '../../Components';

import { soccerData } from '../../utils/data';

// Styles
import './upcoming-matches.modules.css';

const UpcomingMatches = () => {
  const [currTeam, setCurrTeam] = useState('enfuego');

  const handleShowStat = (value) => setCurrTeam(value);

  return (
    <div className='container'>
      <h2 className='main__heading'>Teams</h2>
      <UITeamChips currTeam={currTeam} handleShowStat={handleShowStat} />

      <h2 className='main__heading'>Upcoming Matches</h2>
      <section className='upcoming_match'>
        {soccerData[currTeam]?.upcoming_matches?.map((match) => {
          return (
            <UIStrip match={match} homeTeam={soccerData[currTeam].team_name} />
          );
        })}
      </section>
    </div>
  );
};

export default UpcomingMatches;
