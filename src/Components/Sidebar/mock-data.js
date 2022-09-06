import { BsPersonFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { MdUpcoming, MdWifiProtectedSetup, MdScore } from 'react-icons/md';

import { routeEnum } from '../../utils';

const {
  PLAYERS_PERFORMANCE,
  TEAM_PERFORMANCE,
  UPCOMING_MATCHES,
  TEAM_SETUP,
  SCORECARD,
} = routeEnum;

export const menuItems = [
  {
    id: 1,
    icon: BsPersonFill,
    route: PLAYERS_PERFORMANCE,
    label: 'Players Performance',
  },
  {
    id: 2,
    icon: RiTeamFill,
    route: TEAM_PERFORMANCE,
    label: "Team's Performance",
  },
  {
    id: 3,
    icon: MdUpcoming,
    route: UPCOMING_MATCHES,
    label: 'Upcoming Matches',
  },
  { id: 4, icon: MdWifiProtectedSetup, route: TEAM_SETUP, label: 'Team Setup' },
  { id: 5, icon: MdScore, route: SCORECARD, label: 'Detailed Scorecard' },
];
