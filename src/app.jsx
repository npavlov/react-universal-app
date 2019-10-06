import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/homePageComponent";
import Second from "./pages/secondPageComponent";
import Nav from "./components/nav";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/second' component={Second} />
        <Route path='/' exact render={() => <Redirect to='/home' />} />
      </Switch>
    </>
  );
};

export default App;
