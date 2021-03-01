import { Switch, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Store from "./views/Store";
import StoreItem from "./views/StoreItem";
import NotFound from "./views/NotFound";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store">
          <Store />
        </Route>
        <Route
          path="/store/:id"
          render={(props) => <StoreItem {...props} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
