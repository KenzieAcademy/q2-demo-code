import { Switch, Route, Link } from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/store">
          <Store />
        </Route> */}
        {/* <Route path="/cart">
          <Cart />
        </Route> */}
        {/* <Route path="*">
          <PageNotFound />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
