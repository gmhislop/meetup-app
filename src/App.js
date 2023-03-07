import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>
      <Route path="/new">
        <NewMeetUpPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
