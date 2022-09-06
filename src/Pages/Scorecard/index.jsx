import React, { useState } from 'react';

import { UITeamChips } from '../../Components';

import { soccerData } from '../../utils/data';

// Styles
import './scorecard.modules.css';

const Scorecard = () => {
  const [currTeam, setCurrTeam] = useState('enfuego');

  const handleShowStat = (value) => setCurrTeam(value);

  return (
    <div className='container team'>
      <h2 className='main__heading'>Teams</h2>
      <UITeamChips currTeam={currTeam} handleShowStat={handleShowStat} />

      <h2 className='main__heading'>Scorecard</h2>
      <section className='stat__cards'>
        {soccerData[currTeam]?.team_players?.map((team) => {
          return <></>;
        })}
      </section>
    </div>
  );
};

export default Scorecard;
