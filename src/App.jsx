import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layout
import Wrapper from './Layout/Wrapper';

// Pages
import {
  ErrorPage,
  HomePage,
  PlayersPerformancePage,
  TeamsPerformancePage,
  UpcomingMatchesPage,
} from './Pages';

import { routeEnum } from './utils';

const App = () => {
  const {
    PLAYERS_PERFORMANCE,
    TEAM_PERFORMANCE,
    UPCOMING_MATCHES,
    SCHEDULED_MATCHES,
    TEAM_SETUP,
    SCORECARD,
  } = routeEnum;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path='/' element={<HomePage />} />
          <Route
            path={PLAYERS_PERFORMANCE}
            element={<PlayersPerformancePage />}
          />
          <Route path={TEAM_PERFORMANCE} element={<TeamsPerformancePage />} />
          <Route path={UPCOMING_MATCHES} element={<UpcomingMatchesPage />} />
          <Route path={SCHEDULED_MATCHES} element={<HomePage />} />
          <Route path={TEAM_SETUP} element={<HomePage />} />
          <Route path={SCORECARD} element={<HomePage />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;