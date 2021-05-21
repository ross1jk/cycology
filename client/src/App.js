import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./contexts/UserContext";

function App() {


  return (
    <Router>
      <UserProvider>
        <Route exact path="/" component={Home} />
      </UserProvider>
    </Router>
  );
}

export default App;
