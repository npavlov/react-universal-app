import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/homePageComponents";

const App = () => {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/' exact render={() => <Redirect to='/home' />} />
    </Switch>
  );
};

export default App;
