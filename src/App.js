import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Form from "./pages/Form";
import WheelSection from "./pages/WheelSection";
//Style and Motion
import "./App.css";

function App() {
  const [footerIsDisplayed, setFooterIsDisplayed] = useState(true);

  return (
    <div className="wrapper">
      <Switch>
        <Route path="/" exact>
          <WheelSection></WheelSection>
        </Route>
        <Route path="/form">
          <Form></Form>
        </Route>
      </Switch>

      {footerIsDisplayed && (
        <footer>
          <Link to="/form" onClick={() => setFooterIsDisplayed(false)}>
            Get notified of new games.
          </Link>
        </footer>
      )}
    </div>
  );
}

export default App;
