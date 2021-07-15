import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import GamePage from '../containers/GamePage';

const App = () => (
  <div className="app">
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game/:gameId" component={GamePage} />
      </Switch>
    </main>
  </div>
);

export default App;
