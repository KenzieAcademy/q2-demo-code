import { Switch, Route } from "react-router-dom";
import TopNav from './components/TopNav';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';

function App() {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
