import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedRoutes from "./pages/SavedRoutes";
import SearchRoutes from "./pages/SearchRoutes";
import ViewRoute from "./pages/ViewRoute";

function App() {


  return (
    <Router>
      <div>
        {/* NAV */}
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
