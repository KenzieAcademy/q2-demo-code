import { Switch, Route } from "react-router-dom";
import Home from './views/Home';
import Store from './views/Store';
import TopNav from './components/TopNav'

function App() {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
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
