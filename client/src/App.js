import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedRoutes from "./pages/SavedRoutes";
import SearchRoutes from "./pages/SearchRoutes";
import ViewRoute from "./pages/ViewRoute";
import Nav from "./components/Nav";

function App() {


  return (
    <Router>
      <div>
      <Nav />
        <Switch>

          <Route exact path={["/", "/search"]}>
            <SearchRoutes />
          </Route>

          <Route exact path={"/saved"}>
            <SavedRoutes />
          </Route>

          <Route exact path={"/viewroute"}>
            <ViewRoute />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
