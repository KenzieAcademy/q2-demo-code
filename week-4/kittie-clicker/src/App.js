import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Intermediate from "./views/Intermediate";
import Advanced from "./views/Advanced";
import NotFound from "./views/NotFound";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <Link to="/">Home</Link>
        <Link to="/intermediate">Intermediate</Link>
        <Link to="/advanced/Twix">Advanced</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/intermediate"
          render={(props) => <Intermediate {...props} name="Snoop Dogg" />}
        />
        <Route
          path="/advanced/:name"
          render={(props) => <Advanced {...props} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
