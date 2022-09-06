import React, { useState } from 'react';

import SoccerField from '../../assets/soccer-field.jpg';
import { UITeamChips } from '../../Components';
import { soccerData } from '../../utils/data';

// Styles
import './setup.modules.css';

const TeamSetup = () => {
  const [currTeam, setCurrTeam] = useState('enfuego');

  const handleShowStat = (value) => setCurrTeam(value);

  return (
    <div className='container field'>
      <h2 className='main__heading'>Teams</h2>
      <UITeamChips currTeam={currTeam} handleShowStat={handleShowStat} />

      <h2 className='main__heading'>Team Setup</h2>
      <div className='soccer-field'>
        <img src={SoccerField} alt='soccer-field' />

        {soccerData[currTeam]?.team_players?.map((team) => {
          return (
            <p
              className='player'
              style={{ top: team?.position?.y, left: team?.position?.x }}
            >
              {team.player_name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSetup;
