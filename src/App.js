import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetups">
        <NewMeetUpPage />
      </Route>
      <Route path="/favorite-meetups">
        <FavoritesPage />
      </Route>
    </div>
  );
}

export default App;
