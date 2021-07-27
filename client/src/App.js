import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedRoutes from "./pages/SavedRoutes";
import ViewRoute from "./pages/ViewRoute";
import Nav from "./components/Nav";
import Search from "./pages/SearchRoutes";

function App() {


  return (
    <Router>
      <Nav />
        <Switch>

          <Route exact path={["/", "/search"]} component={Search} />
          <Route exact path={"/saved"} component={SavedRoutes} />
          <Route exact path={"/viewroute/:id"} component={ViewRoute} />
     
        </Switch>
    </Router>
  );
}

export default App;
